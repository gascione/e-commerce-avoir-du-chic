import { useState } from "react";

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
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
