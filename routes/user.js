const express = require("express");
const router = express.Router();

const user=require("../controller/user")

router.post('/user',user.UserDetails)

module.exports = router;