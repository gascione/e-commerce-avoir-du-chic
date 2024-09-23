import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import { CartContext } from "./CartProvider";

export const ItemsContext = createContext(null);
export function ItemsProvider({ children }) {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [items, setItems] = useState([]);
  const { cartItems } = useContext(CartContext);

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      setItems(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingContent(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cartItems]);

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
