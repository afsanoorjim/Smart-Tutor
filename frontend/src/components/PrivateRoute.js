// PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  console.log("Token in PrivateRoute:", token);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
