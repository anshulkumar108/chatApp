const mysql=require('mysql2');
const Sequelize=require("sequelize")
const sequelize=new Sequelize('chat','root','anshulme96@',{ dialect:'mysql',host:'localhost'});

const checkConnection=async()=>{
    try {
        await sequelize.authentication();
        console.log("connected to db...");    
    } catch (error) {
        console.log("unable to connect",error);
    }
}
module.exports ={sequelize}; 