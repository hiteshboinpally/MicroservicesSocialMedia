import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { AuthContext } from '../context/AuthContext';

const Navigation = () => {
  const currentUser = useContext(AuthContext);
  return (
    <div>
      <p>
        Signed in as: {currentUser ? currentUser.displayName : "No one"}
      </p>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/feed">Feed</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
