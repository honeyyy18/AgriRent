import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = ({ user1, user2 }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.emit('join', { user1, user2 });

    socket.on('receiveMessage', ({ sender, message }) => {
      setChat((prevChat) => [...prevChat, { sender, message }]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [user1, user2]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { sender: user1, receiver: user2, message });
      setChat((prevChat) => [...prevChat, { sender: user1, message }]);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {chat.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.message}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
