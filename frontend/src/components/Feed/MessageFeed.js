import React from 'react';
import Message from './Message';
import './MessageFeed.css';

const MessageFeed = () => {
  // This should be replaced with real data
  const messages = [
    { id: 1, content: 'Message 1', upvotes: 0, downvotes: 0 },
    { id: 2, content: 'Message 2', upvotes: 0, downvotes: 0 },
  ];

  return (
    <div className="container">
      <h2>Message Feed</h2>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageFeed;
