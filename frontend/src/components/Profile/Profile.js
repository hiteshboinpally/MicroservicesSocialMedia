import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import FriendsList from './FriendsList';
import './Profile.css';

const Profile = () => {
  const user = useContext(AuthContext);

  if (!user) return <p className="container">Please sign in to view your profile.</p>;

  return (
    <div className="container">
      <h2>{user.username}'s Profile</h2>
      <div className="buttons">
        <button>Follow</button>
        <button>Unfollow</button>
      </div>
      <FriendsList />
    </div>
  );
};

export default Profile;
