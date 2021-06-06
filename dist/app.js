"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-console */
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const routes = tslib_1.__importStar(require("./routes"));
const app = express_1.default();
// database setup
require('dotenv').config();
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:24017/tradeApp';
console.log(process.env.MONGODB_URI);
const mongooseConfigs = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.connect(mongoUri, mongooseConfigs);
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(compression_1.default());
app.use('/api', routes.hello);
app.use('/api/users', routes.users);
app.use('/api/characters', routes.characters);
exports.default = app;
//# sourceMappingURL=app.js.map