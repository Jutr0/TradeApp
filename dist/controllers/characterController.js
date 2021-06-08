"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacter = exports.addCharacter = exports.getAllCharacters = void 0;
const tslib_1 = require("tslib");
const models_1 = require("../models");
exports.getAllCharacters = (req, res, next) => {
    let limit = Number.parseInt(req.query.limit) || 20;
    let offset = Number.parseInt(req.query.offset) || 0;
    let orderBy = req.query.orderBy || "name";
    models_1.Character.find()
        .sort(orderBy)
        .limit(limit)
        .skip(offset)
        .then((data) => {
        res.send({ name: "Characters", limit: limit, offset: offset, data });
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
exports.getCharacter = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (req.params && req.params.id) {
        const character = yield models_1.Character.findOne({
            characterId: +req.params.id,
        }).exec();
        res.send(character);
    }
});
//# sourceMappingURL=characterController.js.map