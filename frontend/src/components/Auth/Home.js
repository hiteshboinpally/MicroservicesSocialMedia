// src/Home.js
import React from 'react';
import { auth } from './firebase';

const Home = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Home;
