const express = require('express');
const router = express.Router();

const {addMsg,allMsg} = require('../controller/chat');
const authorization = require('../auth/authentication');


router.post('/user/chat/:id',authorization,addMsg)
router.get('/user/allchat',authorization,allMsg)

module.exports = router;