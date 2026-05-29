//import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

export default function Dashboard() {
//export default function Dashboard({ removeToken }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    //removeToken();
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}