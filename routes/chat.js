const express = require('express');
const router = express.Router();

const {addMsg} = require('../controller/chat');
const authorization = require('../auth/authentication');


router.post('/user/chat/:id',authorization,addMsg)

module.exports = router;