import React, { useState, useEffect } from 'react';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Fetch initial messages (this could be from an API)
        const initialMessages = [{ id: 1, text: 'Welcome to the chat!' }];
        setMessages(initialMessages);
    }, []);

    const handleSend = () => {
        if (input) {
            const newMessage = { id: messages.length + 1, text: input };
            setMessages([...messages, newMessage]);
            setInput('');
        }
    };

    return (
        <div>
            <h1>Chat Page</h1>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', marginBottom: '10px' }}>
                {messages.map((msg) => (
                    <div key={msg.id}>{msg.text}</div>
                ))}
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatPage;