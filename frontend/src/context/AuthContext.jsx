import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // Load token on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ token });
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    setAuth({ token: data.token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);