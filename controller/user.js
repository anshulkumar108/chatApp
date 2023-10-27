const {User}=require("../model/user");
const bcrypt = require("bcrypt")

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

const userSignin=async (req,res,next)=>{
    const {emailOrPhone, password}= req.body
    try {
        const user=await User.findOne({where:{email:emailOrPhone }|| {phone:emailOrPhone}})
        let compare=await bcrypt.compare(password,user.password)
        console.log(compare);
        res.status(200).json({message:'successful'})
    } catch (error) {
        console.log(error);
    }
}

module.exports={UserSignup,userSignin};