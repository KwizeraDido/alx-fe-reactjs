// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate an authentication check (e.g., check localStorage, API call, etc.)
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useAuth;
