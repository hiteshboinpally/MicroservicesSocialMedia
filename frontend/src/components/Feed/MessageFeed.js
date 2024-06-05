// src/MessageFeed.js
import React, { useContext, useState } from 'react';
import Message from './Message';
import './MessageFeed.css';
import { AuthContext } from '../../context/AuthContext';

const MessageFeed = () => {
  const [messages, setMessages] = useState([
    { id: 1, author: 'Anonymous', content: 'Message 1', upvotes: 0, downvotes: 0 },
    { id: 2, author: 'Elon Musk', content: 'Message 2', upvotes: 0, downvotes: 0 },
  ]);
  const [newMessageContent, setNewMessageContent] = useState('');
  const [genMessageContext, setGenMessageContext] = useState('');
  const currentUser = useContext(AuthContext);

  const handleNewMsgInputChange = (e) => {
    setNewMessageContent(e.target.value);
  };

  const handleGenInputChange = (e) => {
    setGenMessageContext(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newMessageContent.trim()) {
      const newMessage = {
        id: messages.length + 1, // Simple id generation
        author: currentUser ? currentUser.displayName : 'Anonymous',
        content: newMessageContent,
        upvotes: 0,
        downvotes: 0,
      };
      setMessages([...messages, newMessage]);
      setNewMessageContent('');
    }
  };

  const handleGenerateMessage = async (e) => {
    e.preventDefault();
    const url = 'https://api.textcortex.com/v1/texts/social-media-posts';
    const data = {
      context: genMessageContext,
      formality: "default",
      max_tokens: 20,
      mode: "twitter",
      model: "claude-haiku",
      n: 1,
      source_lang: "en",
      target_lang: "en",
      temperature: null
    };
    const apiKey = process.env.REACT_APP_TEXTCORTEX_API_KEY;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`, // Replace 'undefined' with your actual token
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const newMessage = {
          id: messages.length + 1, // Simple id generation
          author: currentUser ? currentUser.displayName : 'Anonymous',
          content: data.data.outputs[0].text,
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
          onChange={handleNewMsgInputChange}
          placeholder="Enter a new message"
          required
        />
        <button type="submit">Add Message</button>
      </form>
      <form onSubmit={handleGenerateMessage}>
        <input
          type="text"
          value={genMessageContext}
          onChange={handleGenInputChange}
          placeholder="Enter message context"
          required
        />
        <button type="submit">Generate New Message</button>
      </form>
      {/* <div className="generate-button">
        <button onClick={handleGenerateMessage}></button>
      </div> */}
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageFeed;
