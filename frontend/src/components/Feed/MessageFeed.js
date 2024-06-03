// src/MessageFeed.js
import React, { useState } from 'react';
import Message from './Message';
import './MessageFeed.css';

const MessageFeed = () => {
  const [messages, setMessages] = useState([
    { id: 1, content: 'Message 1', upvotes: 0, downvotes: 0 },
    { id: 2, content: 'Message 2', upvotes: 0, downvotes: 0 },
  ]);
  const [newMessageContent, setNewMessageContent] = useState('');

  const handleInputChange = (e) => {
    setNewMessageContent(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newMessageContent.trim()) {
      const newMessage = {
        id: messages.length + 1, // Simple id generation
        content: newMessageContent,
        upvotes: 0,
        downvotes: 0,
      };
      setMessages([...messages, newMessage]);
      setNewMessageContent('');
    }
  };

  const handleGenerateMessage = async () => {
    try {
      const response = await fetch('https://api.example.com/generate-message'); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        const newMessage = {
          id: messages.length + 1, // Simple id generation
          content: data.content,
          upvotes: 0,
          downvotes: 0,
        };
        setMessages([...messages, newMessage]);
      } else {
        console.error('Failed to generate message');
      }
    } catch (error) {
      console.error('Error fetching new message:', error);
    }
  };

  return (
    <div className="container">
      <h2>Message Feed</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newMessageContent}
          onChange={handleInputChange}
          placeholder="Enter a new message"
          required
        />
        <button type="submit">Add Message</button>
      </form>
      <button onClick={handleGenerateMessage}>Generate New Message</button>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageFeed;
