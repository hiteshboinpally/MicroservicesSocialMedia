import React, { StrictMode } from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Profile from './components/Profile/Profile';
import MessageFeed from './components/Feed/MessageFeed';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Auth/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <StrictMode>
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<MessageFeed />} />
      </Routes>
    </AuthProvider>
    </StrictMode>
  );
};

export default App;
