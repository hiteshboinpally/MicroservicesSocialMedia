import React, { createContext, useContext, useState } from 'react';
import { auth } from '../components/Auth/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged(user => {
    setCurrentUser(user);
    console.log("user got updated:", user);
  });

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);