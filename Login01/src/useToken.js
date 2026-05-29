import { useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";

export default function useToken() {

  // --- Sprawdzanie tokenu ---
  const checkToken = useCallback((token) => {
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // sekundy

      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        return null;
      }

      return token;
    } catch {
      localStorage.removeItem("token");
      return null;
    }
  }, []);

  // --- Pobieranie tokenu z localStorage ---
  const getToken = useCallback(() => {
    const tokenString = localStorage.getItem("token");
    if (!tokenString) return null;

    try {
      const userToken = JSON.parse(tokenString);
      return checkToken(userToken?.token);
    } catch {
      localStorage.removeItem("token");
      return null;
    }
  }, [checkToken]);

  // --- Stan tokenu ---
  const [token, setTokenState] = useState(() => getToken());

  // --- Zapisywanie tokenu ---
  const saveToken = useCallback((userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setTokenState(userToken.token);
  }, []);

  // --- Usuwanie tokenu ---
  const removeToken = useCallback(() => {
    localStorage.removeItem("token");
    setTokenState(null);
  }, []);

  return {
    token,
    setToken: saveToken,
    removeToken,
    checkToken,
  };
}
