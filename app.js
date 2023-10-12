const express=require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const Port = process.env.PORT || 5000;

const { sequelize } = require("./db/sequelize");
const {User}=require("./model/user")
const router=require("./routes/user")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: false }));
app.use('/',router)

sequelize.sync().then((result)=>{
app.listen(Port,() => {
    console.log(`Server is running on port ${Port}`);
  });
}).catch((error)=>{
    console.log(error)
})