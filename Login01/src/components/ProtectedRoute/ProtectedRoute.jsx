//import { Navigate } from 'react-router-dom';
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, checkToken }) {
  const location = useLocation();

  if (!checkToken()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
