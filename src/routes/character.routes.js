import express from "express";
import {  createcharacter, getAllcharacter, getcharacterById, updatecharacter,deletecharacter  } from "../controller/character.controller.js";

const characterouter = express.Router()

characterouter.post("/characters", createcharacter);

characterouter.get("/characters", getAllcharacter);

characterouter.get("/characters/:id", getcharacterById);

characterouter.put("/characters/:id",updatecharacter);

characterouter.delete("/character/:id", deletecharacter);

export default characterouter;