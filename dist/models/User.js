"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=User.js.map