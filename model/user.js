const {Sequelize ,DataTypes}=require("sequelize");
const {sequelize}=require('../db/sequelize');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allownull: false,

    },
    email: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allownull: false,
    },

    phone:{
        type:DataTypes.STRING,
        allownull:false
    }
})

module.exports={User};