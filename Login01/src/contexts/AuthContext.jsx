import React, { createContext, useContext, useState } from 'react';
import useToken from './../useToken';
import { loginUser } from './../utils/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { token, setToken, removeToken, checkToken } = useToken();
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Login logic here
    // const response = await fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(credentials)
    // });

    // if (!response.ok) {
    //   throw new Error('Login failed');
    // }

    // const data = await response.json();
    // setToken(data);
    // // Optionally decode token to set user info
    // return data;

      const data = await loginUser(credentials); // <-- UŻYWASZ loginUser()

  if (data.error) {
    throw new Error(data.error);
  }

  setToken(data); // jeśli backend zwraca token
  return data;

  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

const chkToken = () => {
    checkToken(token);
    return token;
  };

  const value = {
    token,
    user,
    login,
    logout,
    chkToken,
    isAuthenticated: !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}