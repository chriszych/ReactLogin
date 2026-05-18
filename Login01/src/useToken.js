import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (!tokenString) {
      return null;
    }
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

}