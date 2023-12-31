const mysql=require('mysql2');
const Sequelize=require("sequelize")
const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,
    { dialect:'mysql',
    host:process.env.DB_HOST
});

const checkConnection=async()=>{
    try {
        await sequelize.authentication();
        console.log("connected to db...");    
    } catch (error) {
        console.log("unable to connect",error);
    }
}
module.exports ={sequelize}; 