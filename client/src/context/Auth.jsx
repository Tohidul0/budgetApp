import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage or cookies on component mount
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = async (userData) => {
    try {
      // Perform your login logic here
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // Persist user data
      console.log("User logged in successfully.");
    } catch (error) {
      console.error("Error logging in user:", error);
      // Handle the error appropriately
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user data on logout
    console.log("User logged out successfully.");
    Cookies.remove("access_token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
