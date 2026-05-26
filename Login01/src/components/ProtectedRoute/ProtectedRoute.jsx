
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, chkToken } = useAuth();
  const location = useLocation();

   if (!chkToken()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
