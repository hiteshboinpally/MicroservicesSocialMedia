import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import FriendsList from './FriendsList';
import './Profile.css';

const Profile = () => {
  // TODO: Need fetching logic here for follow / unfollow. For now, not really supported.
  const currentUser = useContext(AuthContext);
  if (!currentUser) return <p className="container">Please sign in to view your profile.</p>;

  return (
    <div className="container">
      <h2>{currentUser.displayName}'s Profile</h2>
      <div className="buttons">
        <button>Follow</button>
        <button>Unfollow</button>
      </div>
      <FriendsList />
    </div>
  );
};

export default Profile;
