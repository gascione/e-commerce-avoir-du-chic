import { createContext, useState, useEffect } from "react";
import { AUTH_TOKEN } from "../axios";

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
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <UserSessionContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout }}
    >
      {children}
    </UserSessionContext.Provider>
  );
};
