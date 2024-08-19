import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = (id) => {
    addToCart(id, quantity);
    console.log(quantity + " Item(s) added to cart");
  };

  return {
    quantity,
    handleMinusQuantity,
    handlePlusQuantity,
    handleAddToCart,
  };
};

export default useQuantity;
