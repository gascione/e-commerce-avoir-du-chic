import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Item = ({ title, img, price, id }) => {
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
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <Link to={`/products/${id}`}>
          <img className="object-cover" src={img} alt={title} />
        </Link>
      </div>
      <div className="mt-4 px-5 pb-5">
        <Link to={`/products/${id}`}>
          <h5 className="text-xl tracking-tight text-slate-900 line-clamp-2 h-14">
            {title}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <h4 className="text-lg font-bold text-gray-900">${price}</h4>
          <div className="flex gap-2">
            <button
              className={`flex items-center justify-center rounded-l-md px-4 transition ${
                quantity === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-black hover:text-white"
              }`}
              onClick={handleMinusQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="h-8 w-8 font-medium text-lg rounded-lg flex justify-center items-center">
              {quantity}
            </span>
            <button
              className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
              onClick={handlePlusQuantity}
            >
              +
            </button>
          </div>
        </div>

        <button
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#fff" }}
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Item;
