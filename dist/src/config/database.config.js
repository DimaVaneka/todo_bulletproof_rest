"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("app", "root", "Dima2001", {
    dialect: "mysql",
    host: "localhost"
});
exports.default = db;