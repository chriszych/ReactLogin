import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import useToken from './useToken';


function App() {

    const { token, setToken } = useToken();

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={              
            <ProtectedRoute token={token}>
                <Dashboard />
              </ProtectedRoute>
              } 
              />
          <Route path="/preferences" element={
            <ProtectedRoute token={token}>
            <Preferences />
            </ProtectedRoute>
            } 
            />
          <Route path="/login" element={
            <Login setToken={setToken}/>
            } 
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

