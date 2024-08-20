import { createContext, useState, useEffect, useContext } from "react";
import { axiosInstance } from "../axios";
import { UserSessionContext } from "./UserSessionProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { isLoggedIn } = useContext(UserSessionContext);
  const getCart = async () => {
    try {
      const { data } = await axiosInstance.get("shopping_cart", {});
      console.log("Cart: ", data);
      localStorage.setItem("cart", JSON.stringify(data));
      setCart(data.line_items);
      setCartTotal(data.total_price);
    } catch (error) {
      console.log(error);
    }
  };

  const isInCart = (id) => {
    const item = cartItems.find((item) => item.product.id === id);
    return item;
  };

  const addToCart = async (id, quantity) => {
    console.log(id + "quantity : " + quantity);
    getCart();
    const itemSelected = isInCart(id);
    if (itemSelected) {
      try {
        const response = await axiosInstance.patch(
          `shopping_cart/line_items/${itemSelected.id}`,
          {
            line_item: {
              quantity,
            },
          }
        );
        console.log("Item Updated: ", response);
        getCart();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axiosInstance.post("shopping_cart/line_items", {
          line_item: {
            quantity,
            product_id: id,
          },
        });
        console.log("Cart Successfully: ", response);
        getCart();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFromCart = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `shopping_cart/line_items/${id}`
      );
      console.log("Item Deleted: ", response);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart.line_items);
        setCartTotal(parsedCart.total_price);
      } else {
        console.log("Use Effect paso isLoggedIn");
        getCart();
      }
    }
  }, [isLoggedIn]);
  return (
    <CartContext.Provider
      value={{ addToCart, getCart, removeFromCart, cartItems, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
