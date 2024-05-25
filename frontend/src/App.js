import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import SignIn from './components/Auth/SignIn';
import Profile from './components/Profile/Profile';
import MessageFeed from './components/Feed/MessageFeed';
import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path="/" exact element={SignIn()} />
        <Route path="/profile" element={Profile()} />
        <Route path="/feed" element={MessageFeed()} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
