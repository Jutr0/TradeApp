"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = exports.isUser = exports.addUser = exports.getAllUsers = void 0;
const tslib_1 = require("tslib");
const models_1 = require("../models");
exports.getAllUsers = (req, res, next) => {
    models_1.User.find()
        .then((data) => {
        res.send({ name: "User Route", data });
    })
        .catch((err) => next(err));
};
exports.addUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const query = { name: req.body.name };
    const update = req.body;
    const options = { upsert: true, new: true };
    try {
        const user = yield models_1.User.findOneAndUpdate(query, update, options).lean().exec();
        res.send({ name: user.name, email: user.email, avatar: user.avatar, id: user._id });
    }
    catch (e) {
        console.error(e);
        res.send(e);
    }
});
exports.isUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let isUser;
    if (req.query.email) {
        const { name, email } = req.query;
        const query = { $or: [{ name: name }, { email: email }] };
        isUser = yield models_1.User.exists(query);
    }
    else {
        const { name, password } = req.query;
        const query = { $and: [{ name: name }, { password: password }] };
        isUser = yield models_1.User.exists(query);
    }
    res.send({ isUser });
});
//TODO it's not working properly
exports.findUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    const user = yield models_1.User.findOne({ name: name }).lean().exec();
    res.send(user);
});
//# sourceMappingURL=userController.js.map