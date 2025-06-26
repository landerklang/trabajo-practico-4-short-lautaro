import { DataTypes} from "sequelize";
import sequelize from "../config/database.js";

const Character = sequelize.define("character",{
    id: {type: DataTypes.NUMBER, allownull: false, primaryKey: true },
    name: {type: DataTypes.STRING, allownull: false},
    ki: {type: DataTypes.NUMBER, allownull: false },
    gender:{type: DataTypes.STRING, allownull: false},
    race: {type: DataTypes.STRING, allownull:false},
    descripcion: {type: DataTypes.STRING, },
});

export default Character;