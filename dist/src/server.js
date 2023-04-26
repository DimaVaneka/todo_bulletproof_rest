"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./model/index");
const express_1 = __importDefault(require("express"));
const database_config_1 = __importDefault(require("./config/database.config"));
const uuid_1 = require("uuid");
database_config_1.default.authenticate()
    .then(() => {
    console.log('connected to db');
})
    .catch(err => {
    console.log('Error' + err);
});
database_config_1.default.sync().then(() => {
    console.log("yes re-sync done!'");
});
const app = (0, express_1.default)();
const port = 9000;
app.use(express_1.default.json());
app.post("/create", async (req, res) => {
    const id = (0, uuid_1.v4)();
    try {
        const record = await index_1.TodoInstance.create({ ...req.body, id });
        return res.status(200).send({
            message: "Succesfully create todo",
            isSuccess: true
        });
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
});
app.listen(port, () => {
    console.log("server is running on port " + port);
});
