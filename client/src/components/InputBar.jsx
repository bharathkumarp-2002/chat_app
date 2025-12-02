import React, { useState } from 'react';

const InputBar = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={{ width: '80%', padding: '10px' }}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default InputBar;