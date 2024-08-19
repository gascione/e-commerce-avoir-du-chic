import { createContext, useState, useEffect } from "react";
import { AUTH_TOKEN } from "../axios";
import { axiosInstance } from "../axios";

export const UserSessionContext = createContext();
export const UserSessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    setIsLoggedIn(!!token);
  });
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = async () => {
    console.log("log out");
    try {
      const response = await axiosInstance.delete("/users/sign_out");
      console.log("Logout Successfull: ", response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoggedIn(false);
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem("items");
    }
  };
  return (
    <UserSessionContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout }}
    >
      {children}
    </UserSessionContext.Provider>
  );
};
