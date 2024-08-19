import { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const addToCart = async (item, quantity) => {
    // const id = item.id;
    // try {
    //   const response = await axiosInstance.post("shopping_cart/line_items", {
    //     line_item: {
    //       quantity,
    //       product_id: id,
    //     },
    //   });
    //   console.log("Cart ADDED :", response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const removeFromCart = async (item) => {
    // const id = item.id;
    // try {
    //   const response = await axiosInstance.delete("shopping_cart/line_items", {
    //     id,
    //   });
    //   console.log("Cart deleted :", response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //   const getCartTotal = () => {
  //     return cartItems.reduce(
  //       (acc, item) => acc + item.unit_price * item.quantity,
  //       0
  //     );
  //   };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
