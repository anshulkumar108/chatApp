const {Sequelize,DataTypes}=require('sequelize');
const {sequelize}=require('../db/sequelize');

const ChatMessage = sequelize.define('ChatMessage', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
module.exports={ChatMessage };