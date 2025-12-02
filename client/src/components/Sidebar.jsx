import React from 'react';

const Sidebar = ({ chatHistory }) => {
    return (
        <div className="sidebar">
            <h2>Chat History</h2>
            <ul>
                {chatHistory.map((chat, index) => (
                    <li key={index}>{chat}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;