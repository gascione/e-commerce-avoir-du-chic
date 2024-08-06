import { createContext, useState } from "react";

export const ItemsContext = createContext(null);
export function ItemsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ItemsContext.Provider value={{ isLoading }}>
      {" "}
      {children}
    </ItemsContext.Provider>
  );
}
