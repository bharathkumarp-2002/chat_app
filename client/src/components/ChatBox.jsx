import React from 'react';

const ChatBox = ({ messages }) => {
    return (
        <div className="chat-box">
            {messages.map((msg, index) => (
                <div key={index} className="chat-message">
                    <strong>{msg.user}:</strong> {msg.text}
                </div>
            ))}
        </div>
    );
};

export default ChatBox;