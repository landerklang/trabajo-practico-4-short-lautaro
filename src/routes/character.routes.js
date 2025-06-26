import express from "express";
import {  createcharacter, getAllcharacter, getcharacterById, updatecharacter,deletecharacter  } from "../controller/character.controller.js";

const characterouter = express.Router()

characterouter.post("/Character", createcharacter);

characterouter.get("/Character", getAllcharacter);

characterouter.get("/:id", getcharacterById);

characterouter.put("/:id",updatecharacter);

characterouter.delete("/:id", deletecharacter);

export default characterouter;