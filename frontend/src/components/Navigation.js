import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/feed">Feed</Link></li>
    </ul>
  </nav>
);

export default Navigation;
