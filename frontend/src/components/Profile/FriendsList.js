import React from 'react';

const FriendsList = () => {
  // This should be replaced with real data
  const friends = ['Friend 1', 'Friend 2', 'Friend 3'];

  return (
    <div>
      <h3>Friends List</h3>
      <ul>
        {friends.map(friend => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
