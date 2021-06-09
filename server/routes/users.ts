import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

/* GET all users */
router.get("/", userController.getAllUsers);
router.post("/",userController.addUser)
router.get("/is",userController.isUser)
router.get("/find",userController.findUser)
export default router;
