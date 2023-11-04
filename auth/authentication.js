const jwt = require('jsonwebtoken');
const UserModel = require("../model/user");
async function authorization (req,res,next){
    try {
        
        let token =req.header('authorization');
        let {userId,userPhone,userEmail} = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.body.userId = userId;
        req.body.userPhone = userPhone;
        req.body.userEmail =userEmail;
          next();
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = authorization;