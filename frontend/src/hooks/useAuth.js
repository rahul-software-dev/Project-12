import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    const res = await axios.post("/auth/login", credentials);
    setUser(res.data.user);
    localStorage.setItem("token", res.data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("/auth/me").then(res => setUser(res.data)).catch(() => logout());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};