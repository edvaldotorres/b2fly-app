/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ element, ...props }) => {
  const accessToken = localStorage.getItem('access_token');

  return accessToken ? (
    React.cloneElement(element, props)
  ) : (
    <Navigate to="/" replace />
  );
};

