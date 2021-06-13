"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const CharacterShema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    characterId: {
        type: Number,
        required: true,
        unique: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    stats: {
        strength: { type: Number, required: true },
        agility: { type: Number, required: true },
        magic: { type: Number, required: true },
        resistance: { type: Number, required: true },
    },
    race: { type: String },
}, { timestamps: true });
const Character = mongoose_1.default.model("Character", CharacterShema);
exports.default = Character;
//# sourceMappingURL=Character.js.map