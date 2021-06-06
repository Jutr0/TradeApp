import express from "express";
import * as characterController from "../controllers/characterController";

const router = express.Router();

/* GET all characters*/
router.get("/", characterController.getAllCharacters);
router.post("/", characterController.addCharacter);

export default router;
