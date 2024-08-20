import { createContext, useState, useEffect, useContext } from "react";
import { axiosInstance } from "../axios";
import { UserSessionContext } from "./UserSessionProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const addToCart = async (id, quantity) => {
    console.log(id + "quantity : " + quantity);
    try {
      const response = await axiosInstance.post("shopping_cart/line_items", {
        line_item: {
          quantity: quantity,
          product_id: id,
        },
      });
      console.log("Cart Successfull: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
