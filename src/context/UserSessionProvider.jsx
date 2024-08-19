import { createContext, useState } from "react";

export const UserSessionContext = createContext();
export const UserSessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
