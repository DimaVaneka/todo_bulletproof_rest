import {Sequelize} from "sequelize";

const db = new Sequelize("app", "root", "Dima2001",{
    dialect:"mysql",
    host : "localhost"
});

export default db;