const {User}=require("../model/user");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const UserSignup=async(req,res,next)=>{
    const {name,email,phone,password}=req.body
    const saltRound=10;
    try {
        const userEmail= await User.findOne({where:{email: email}});
        if (userEmail) {
         res.status(501).json({message:"email id already exists"})
        }else{
            const hashedPassword = await bcrypt.hash(password,saltRound)
            const user=await User.create({name:name,phone:phone,email:email,password:hashedPassword})
            console.log(user);
            res.status(200).json({user:user,message:"successful"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(402);
    }
}

function generateAccessToken(obj){
    return jwt.sign(obj, 'chat');
}


const userSignin=async (req,res,next)=>{
    const {emailOrPhone, password}= req.body
    try {
        const user=await User.findOne({where:{email:emailOrPhone }|| {phone:emailOrPhone}})
        console.log("login",user);
        if (!user) {
            res.status(404).json({ message: 'Email ID does not exist' })
          }else{
            let compare=await bcrypt.compare(password,user.password)
            // console.log(compare);
            if (compare) {
				let token = generateAccessToken({  userId:user.id,  userEmail:user.email ,userPhone:user.phone });
				res.status(200).json({ msg: "user logged in successfully", token: token });
                console.log(token);
			} 
            else {
				return res.status(401).json({ msg: "Unauthorised User" });
			}
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports={UserSignup,userSignin};