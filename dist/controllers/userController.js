"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const models_1 = require("../models");
exports.getAllUsers = (req, res, next) => {
    models_1.User.find()
        .then((data) => {
        res.send({ name: "User Route", data });
    })
        .catch((err) => next(err));
};
//# sourceMappingURL=userController.js.map