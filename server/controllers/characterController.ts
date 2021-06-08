import { NextFunction, Request, Response } from "express";
import { Character } from "../models";

export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Character.find()
    .then((data) => {
      res.send({ name: "Characters", data });
    })
    .catch((e) => next(e));
};

export const addCharacter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const query = {characterId:req.body.characterId}
  const update = req.body;
  const options = { upsert: true, new: true };

  const character = Character.findOneAndUpdate(query, update, options).exec();
  res.send(character);
};


export const getCharacter=async (  req: Request,
  res: Response,
  next: NextFunction)=>{
    if(req.params && req.params.id){
  
      const character = await Character.findOne({characterId:+req.params.id}).exec();
      res.send(character);
      
    }
  }
