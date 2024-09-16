import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import { UserSessionContext } from "./UserSessionProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const { isLoggedIn } = useContext(UserSessionContext);

  const handlePopUp = () => {
    setPopUp(false);
  };

  const getCart = async () => {
    try {
      const { data } = await axiosInstance.get("shopping_cart", {});
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

  const addToCart = async (id, quantity, title) => {
    getCart();
    const itemSelected = isInCart(id);
    if (itemSelected) {
      try {
        const response = await axiosInstance.patch(
          `shopping_cart/line_items/${itemSelected.id}`,
          {
            line_item: {
              quantity: itemSelected.quantity + quantity,
            },
          }
        );
        getCart();
        setPopUp(true);
        setPopUpMessage(`${title} se agregó al carrito`);
      } catch (error) {
        console.log(error);
        const errorQuantity = error.request.response.match(/\d+/)[0];
        console.log(errorQuantity);
        setPopUp(true);
        setPopUpMessage(
          `Cantidad excedida. Puedes agregar hasta ${errorQuantity} unidad(es) en total`
        );
      }
    } else {
      try {
        const response = await axiosInstance.post("shopping_cart/line_items", {
          line_item: {
            quantity,
            product_id: id,
          },
        });
        getCart();
        setPopUp(true);
        setPopUpMessage(`${title} se agregó al carrito`);
      } catch (error) {
        console.log(error);
        const errorQuantity = error.request.response.match(/\d+/)[0];
        console.log(errorQuantity);
        setPopUp(true);
        setPopUpMessage(
          `Cantidad excedida. Puedes agregar hasta ${errorQuantity} unidad(es) en total`
        );
      }
    }
  };

  const updateToCart = async (id, quantity, title) => {
    getCart();
    const itemSelected = isInCart(id);
    if (itemSelected) {
      try {
        const response = await axiosInstance.patch(
          `shopping_cart/line_items/${itemSelected.id}`,
          {
            line_item: {
              quantity: quantity,
            },
          }
        );
        getCart();
        setPopUp(true);
        setPopUpMessage(`Se actualizó la cantidad de ${title}`);
      } catch (error) {
        console.log(error);
        const errorQuantity = error.request.response.match(/\d+/)[0];
        console.log(errorQuantity);
        setPopUp(true);
        setPopUpMessage(
          `Cantidad excedida. Puedes agregar hasta ${errorQuantity} unidad(es) en total`
        );
      }
    }
  };

  const removeFromCart = async (id, title) => {
    try {
      const response = await axiosInstance.delete(
        `shopping_cart/line_items/${id}`
      );
      setPopUpMessage(`${title} fue eliminado del carrito`);
      setPopUp(true);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const cartCheckout = async () => {
    try {
      const response = await axiosInstance.post(`orders`, {
        order: {
          credit_card: {
            card_number: "4242424242424242",
            exp_month: 12,
            exp_year: 2024,
            cvc: "222",
          },
          shipping_address: {
            city: "La Plata",
            country: "AR",
            line_1: "line_1",
            line_2: "line_2",
            postal_code: "1900",
            state: "Buenos Aires",
          },
        },
      });
      setPopUpMessage(`Compra realizada con éxito`);
      setPopUp(true);
      setCart([]);
      setCartTotal([]);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Use Effect paso isLoggedIn");
      getCart();
    }
  }, [isLoggedIn]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getCart,
        removeFromCart,
        cartItems,
        cartTotal,
        popUp,
        setPopUp,
        handlePopUp,
        popUpMessage,
        updateToCart,
        cartCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
