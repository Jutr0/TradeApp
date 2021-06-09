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
  
  res.send({name:user.name,email:user.email,avatar:user.avatar,id:user._id});
}catch(e){
  console.error(e)
  res.send(e)
}
};

export const isUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUser:boolean;
  if(req.query.email){
  const {name,email} = req.query 
  const query ={ $or: [ {name:name as string},{email:email as string} ] }
  isUser = await User.exists(query)
  }
  else{
    const {name,password} = req.query;
    const query = {$and:[{name:name as string},{password:password as string}]}
    isUser = await User.exists(query)
  }
  res.send({isUser})
}

//TODO it's not working properly
export const findUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.query.name as string;
  const user = await User.findOne({name:name}).lean().exec()
  
  return user
}