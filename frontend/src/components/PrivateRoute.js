// src/PrivateRoute.js
import React, { useContext } from 'react';
// import { Route, Redirect, redirect } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, AuthContext } from '../context/AuthContext';



const PrivateRoute = () => {
  const currentUser = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
