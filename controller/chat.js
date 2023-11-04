const {ChatMessage }=require('../model/chat.js');

const addMsg=async(req,res,next)=>{
    const { userId, message } = req.body;
    console.log(userId,message);
    try {
      const newMessage = await ChatMessage.create({ userId,message });
      console.log(newMessage);
      res.status(200).json(newMessage);
    } catch (error) {
      console.error('Error creating chat message:', error);
      res.status(500).json({ error: 'Failed to store chat message' });
    }
}

module.exports = {addMsg}