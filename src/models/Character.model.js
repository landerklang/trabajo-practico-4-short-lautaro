import { DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";

const Character = sequelize.define("Character",{
    name: {type: DataTypes.STRING, allownull: false},
    ki: {type: DataTypes.INTEGER, allownull: false },
    gender:{type: DataTypes.STRING, allownull: false},
    race: {type: DataTypes.STRING, allownull:false},
    descripcion: {type: DataTypes.STRING, },
});

export default Character;