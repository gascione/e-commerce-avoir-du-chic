import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Item = ({ title, img, price }) => {
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
        <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center">
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000" }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
