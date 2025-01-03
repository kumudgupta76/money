import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// import { UserContext } from './UserContext';

const ProtectedRoute = ({ children }) => {
  // const { user } = useContext(UserContext);

  const user = true;

  return user ? children : <Navigate to="/money/auth" />;
};

export default ProtectedRoute;
