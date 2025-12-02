const express = require('express');
const router = express.Router();

// Mock database - replace with your actual database logic
let chats = [];

// @route   GET /api/chats
// @desc    Get all chats
router.get('/', (req, res) => {
    res.json(chats);
});

// @route   POST /api/chats
// @desc    Create a new chat message
router.post('/', (req, res) => {
    const { message, sender } = req.body;
    if (!message || !sender) {
        return res.status(400).json({ msg: 'Please include a message and sender' });
    }
    const newChat = { id: chats.length + 1, message, sender, timestamp: new Date() };
    chats.push(newChat);
    res.json(newChat);
});

// @route   DELETE /api/chats/:id
// @desc    Delete a chat message
router.delete('/:id', (req, res) => {
    const chatId = parseInt(req.params.id);
    chats = chats.filter(chat => chat.id !== chatId);
    res.json({ msg: 'Chat message deleted' });
});

module.exports = router;