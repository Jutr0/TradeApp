import { NextFunction, Request, Response } from "express";
import { Character } from "../models";

export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let limit = Number.parseInt(req.query.limit as string) || 20;
  let offset = Number.parseInt(req.query.offset as string) || 0;
  let orderBy = req.query.orderBy as string || "name";

  Character.find()
    .sort(orderBy)
    .limit(limit)
    .skip(offset)
    .then((data) => {
      res.send({ name: "Characters",limit:limit, offset:offset, data });
    })
    .catch((e) => next(e));

};

export const addCharacter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = { characterId: req.body.characterId };
  const update = req.body;
  const options = { upsert: true, new: true };

  const character = Character.findOneAndUpdate(query, update, options).exec();
  res.send(character);
};

export const getCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params && req.params.id) {
    const character = await Character.findOne({
      characterId: +req.params.id,
    }).exec();
    res.send(character);
  }
};
