// src/Login.js
import React from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithRedirect } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Login;
