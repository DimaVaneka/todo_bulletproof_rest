import express, { Request, Response } from "express";
import db from "./config/database.config";
import todoRouter from './todo/route/index';

db.authenticate()
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log('Error' + err)
    })

db.sync().then(() => {
    console.log("yes re-sync done!'");
})


const app = express();
const port = 9000;

app.use(express.json());

app.use("/api/v1",todoRouter)



app.listen(port, () => {
    console.log("server is running on port " + port);
});