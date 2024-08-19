import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../axios";

export const ItemsContext = createContext(null);
export function ItemsProvider({ children }) {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [items, setItems] = useState([]);

  const fetchData = async (event) => {
    try {
      const { data } = await axiosInstance.get("/products");
      setItems(data.data);
      localStorage.setItem("items", JSON.stringify(data.data));
    } catch (error) {
      console.log(error);
    } finally {
      console.log(items);
      setIsLoadingContent(false);
    }
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
      setIsLoadingContent(false);
    } else {
      fetchData();
    }
  }, []);

  return (
    <ItemsContext.Provider value={{ items, isLoadingContent }}>
      {" "}
      {children}
    </ItemsContext.Provider>
  );
}
