import React, { useState } from 'react';
import './Message.css';

const Message = ({ message }) => {
  const [upvotes, setUpvotes] = useState(message.upvotes);
  const [downvotes, setDownvotes] = useState(message.downvotes);

  const handleUpvote = () => setUpvotes(upvotes + 1);
  const handleDownvote = () => setDownvotes(downvotes + 1);

  return (
    <div className="message">
      <h4>Author: {message.author}</h4>
      <p>{message.content}</p>
      <div className="buttons">
        <button onClick={handleUpvote}>Upvote ({upvotes})</button>
        <button onClick={handleDownvote}>Downvote ({downvotes})</button>
      </div>
    </div>
  );
};

export default Message;
