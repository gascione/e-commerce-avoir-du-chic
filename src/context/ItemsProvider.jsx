import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import { UserSessionContext } from "./UserSessionProvider";
import { CartContext } from "./CartProvider";

export const ItemsContext = createContext(null);
export function ItemsProvider({ children }) {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [items, setItems] = useState([]);
  const { isLoggedIn } = useContext(UserSessionContext);
  const { cartItems } = useContext(CartContext);

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      setItems(data.data);
      localStorage.setItem("items", JSON.stringify(data.data));
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
    if (!isLoggedIn) {
      setIsLoadingContent(false);
      return;
    }
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      fetchData();
    }
  }, [isLoggedIn]);

  return (
    <ItemsContext.Provider value={{ items, isLoadingContent }}>
      {" "}
      {children}
    </ItemsContext.Provider>
  );
}
