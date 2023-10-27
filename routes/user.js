const express = require("express");
const router = express.Router();

const user=require("../controller/user")

router.post('/user/signup',user.UserSignup)
router.post('/user/signin',user.userSignin)

module.exports = router;