"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCharacter = exports.getAllCharacters = void 0;
const models_1 = require("../models");
exports.getAllCharacters = (req, res, next) => {
    models_1.Character.find()
        .then((data) => {
        res.send({ name: "Characters", data });
    })
        .catch((e) => next(e));
};
exports.addCharacter = (req, res, next) => {
    const query = { characterId: req.body.characterId };
    const update = req.body;
    const options = { upsert: true, new: true };
    const character = models_1.Character.findOneAndUpdate(query, update, options).exec();
    res.send(character);
};
//# sourceMappingURL=characterController.js.map