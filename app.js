import express from "express";
import "dotenv/config";
import characterouter from "./src/routes/character.routes.js";
import {sequelize} from "./src/config/database.js";
import {startOn} from "./src/config/database.js";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
sequelize.authenticate();

app.use("/api", characterouter)

startOn().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Escuchando en el puerto tatatatat");
    })
})