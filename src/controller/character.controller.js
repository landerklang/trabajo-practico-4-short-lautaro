import { INTEGER, STRING } from "sequelize";
import Character from "../models/Character.model.js";
//verificacion de que los atributos no sean validos

export const createcharacter = async (req, res) => {
    const{ id, name, ki, gender, race, descripcion} = req.body;
    if (name===""){
        return res.status(401).json({message: "no se permiten campos vacios"})
    };
    if (id===""){
        return res.status(401).json({message: "no se permiten campos vacios"})
    };
    if (ki===""){
        return res.status(401).json({message: "no se permiten campos vacios"})
    };
    if (gender===""){
        return res.status(401).json({message: "no se permiten campos vacios"})
    };
    if (race===""){
        return  res.status(401).json({message: "no se permiten campos vacios"})
    };
    //verificacion del ki para que sea entero

    const kiInt = Math.floor(ki) 
    if (ki !== kiInt ){ 
        return res.status(400).json({message: "solo se permite valores numericos"})
    };
    if (gender !== "male" || gender !== "female"){
        return res.status(401).json({message: "solo se permiten añadir los generos Male y Female" })
    };
    try{
        const character = await Character.create(req.body);
        res.status(201).json(character);
    } catch (err){
        res.status(500).json({ error: err.message});
    };
};

export const getAllcharacter = async(req, res) =>{
    try{
        const character=await Character.findAll ();
        res.json (character);
    } catch (err){
        res.status(500).json({error: err.message});
    }
}

export const getcharacterById = async (req, res) =>{
    try{
        const character= await Character.findByPk (req.params.id);
        if (character) res.json (character);
        else res.status(404),json({message: "producto no encontrado" });
    } catch(err){
        res.status(500).json({error: err.message});
    }
}
export const updatecharacter = async (req, res) =>{
    try{
        const [update] = await Character.update (req.body, {
            where: {id:req.params.id},
    });
    if (update) {
        const updatedcharacter = await Character.findByPk(req.params.id);
        res.json (updatedcharacter)
    } else{
        res.status(404).json({message: "Personaje no encontrado"});
    }
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

export const deletecharacter = async (req,res) =>{
    try{
        const deleted= await Character.destroy({where: { id: req.params.id }})
        if (deleted) res.json({message: "personaje eliminado"})
            else res.status(404).json({message: "producto no encontrado"})
        } catch(err){
            res.status(500).json({error: err.message});
        }
    };
