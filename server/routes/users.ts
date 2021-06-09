import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

/* GET all users */
router.get("/", userController.getAllUsers);
router.post("/",userController.addUser)
export default router;
