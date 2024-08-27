import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";

const useQuantity = (initialQuantity = 1, stock) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { addToCart, updateToCart } = useContext(CartContext);
  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleAddToCart = (id, title) => {
    addToCart(id, quantity, title);
    setQuantity(1);
  };

  const updateElementToCart = (id, title) => {
    updateToCart(id, quantity, title);
  };

  return {
    quantity,
    handleMinusQuantity,
    handlePlusQuantity,
    handleAddToCart,
    updateElementToCart,
  };
};

export default useQuantity;
