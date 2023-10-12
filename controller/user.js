const {User}=require("../model/user");
const bcrypt = require("bcrypt")

const UserDetails=async(req,res,next)=>{
    const {name,email,phone,password}=req.body
    const saltRound=10;
    try {
        const hashedPassword = await bcrypt.hash(password,saltRound)
        const user=await User.create({name:name,phone:phone,email:email,password:hashedPassword})
        console.log(user);
        res.status(200).json({user:user,message:"successful"})
    } catch (error) {
        console.log(error)
        res.status(402);
    }
}


module.exports={UserDetails};