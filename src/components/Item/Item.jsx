import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Item = ({ title, img, price }) => {
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
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      {/* //agregar un link para que se vea el producto más grande */}
      <img
        className="w-full h-80 object-cover object-top drop-shadow-sm"
        src={img}
        alt={title}
      />
      <h3 className="text-2xl py-3 text-center font-medium">{title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">${price}</p>
        <div className="flex gap-2 justify-center">
          <button
            className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
            {quantity}
          </span>
          <button
            className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center"
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000" }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
