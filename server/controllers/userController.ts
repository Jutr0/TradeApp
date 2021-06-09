import { Request, Response, NextFunction } from "express";
import { User } from "../models";

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  User.find()
    .then((data) => {
      res.send({ name: "User Route", data });
    })
    .catch((err) => next(err));
};

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = { name: req.body.name };
  const update = req.body;
  const options = { upsert: true, new: true };
try{
  const user = await User.findOneAndUpdate(query, update, options).lean().exec();
  
  res.send({name:"Added",user});
}catch(e){
  console.error(e)
  res.send(e)
}
};
