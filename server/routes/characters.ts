import express from "express";
import * as characterController from "../controllers/characterController";

const router = express.Router();

/* GET all characters*/
router.get("/", characterController.getAllCharacters);
router.post("/", characterController.addCharacter);
router.get("/:id",characterController.getCharacter);

export default router;
