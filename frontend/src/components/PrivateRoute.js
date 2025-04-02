import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // Get token from local storage

  if (!token) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children;
}

export default PrivateRoute;
