import { NextFunction, Request, Response } from "express";
import { Character } from "../models";

export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let limit = Number.parseInt(req.query.limit as string) || 20;
  limit = limit > 100 ? 100 : limit < 1 ? 1 : limit;

  let offset = Number.parseInt(req.query.offset as string) || 0;
  let orderBy = (req.query.orderBy as string) || "name";

  Character.find()
    .sort(orderBy)
    .limit(limit)
    .skip(offset)
    .lean()
    .then((data) => {
      res.send({ name: "Characters", limit: limit, offset: offset, data });
    })
    .catch((e) => next(e));
};

export const addCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = { characterId: req.body.characterId };
  const update = req.body;
  const options = { upsert: true, new: true };
  try{
  const character = await Character.findOneAndUpdate(query, update, options)
    .lean()
    .exec();
  res.send(character);
}catch(e){
  console.error(e)
}
};

export const getCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params && req.params.id) {
    const character = await Character.findOne({
      characterId: +req.params.id,
    })
      .lean()
      .exec();
    res.send(character);
  }
};
