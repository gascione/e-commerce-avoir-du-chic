import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext(null);
export function ItemsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ItemsContext.Provider value={{ items, isLoading }}>
      {" "}
      {children}
    </ItemsContext.Provider>
  );
}
