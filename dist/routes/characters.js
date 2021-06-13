"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const characterController = tslib_1.__importStar(require("../controllers/characterController"));
const router = express_1.default.Router();
/* GET all characters*/
router.get("/", characterController.getAllCharacters);
router.post("/", characterController.addCharacter);
router.get("/:id", characterController.getCharacter);
exports.default = router;
//# sourceMappingURL=characters.js.map