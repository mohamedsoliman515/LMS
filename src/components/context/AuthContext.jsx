import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("authToken") || null);

  // Load token from cookies when app start
  useEffect(() => {
    const savedToken = Cookies.get("authToken");

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Save token in state + cookies
  const setAuthToken = (data) => {
    const newToken = btoa(`${data.email}:${data.password}`);
    setToken(newToken);
    Cookies.set("authToken", newToken, { expires: 15 });
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier usage
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
