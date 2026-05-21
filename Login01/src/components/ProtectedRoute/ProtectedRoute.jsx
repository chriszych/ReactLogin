//import { Navigate } from 'react-router-dom';
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, token }) {

  const location = useLocation();

  if (!token) {
    //return <Navigate to="/login" replace />;
       return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}