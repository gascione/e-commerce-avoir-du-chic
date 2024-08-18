import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../axios";

export const ItemsContext = createContext(null);
export function ItemsProvider({ children }) {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [items, setItems] = useState([]);
  let data = [];
  const fetchData = async (event) => {
    try {
      const response = await axiosInstance.get("/products");
      data = response.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      setItems(data);
      setIsLoadingContent(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ItemsContext.Provider value={{ items, isLoadingContent }}>
      {" "}
      {children}
    </ItemsContext.Provider>
  );
}
