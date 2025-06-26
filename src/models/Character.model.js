import { DataTypes} from "sequelize";
import sequelize from "../config/database.js";

export const character=sequelize.define("character",{
    id: {type: DataTypes.NUMBER, allownull: false},
    name: {type: DataTypes.STRING, allownull: false},
    ki: {type: DataTypes.NUMBER, allownull: false },
    gender:{type: DataTypes.STRING, allownull: false},
    race: {type: DataTypes.STRING, allownull:false},
    descripcion: {type: DataTypes.STRING, },
});

export default character;