import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useQuantity from "../../hooks/useQuantity";
import QuantityCounter from "../QuantityCounter";

const Item = ({ title, img, unit_price, id, stock }) => {
  const { quantity, handleMinusQuantity, handlePlusQuantity, handleAddToCart } =
    useQuantity();
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <Link to={`/products/${id}`}>
          <img className="object-cover" src={img} alt={title} />
        </Link>
      </div>
      <div className="mt-4 px-5 pb-5 w-full">
        <Link to={`/products/${id}`}>
          <h5 className="text-xl tracking-tight text-slate-900 line-clamp-2 h-14">
            {title}
          </h5>
        </Link>
        {stock <= 0 ? (
          <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white">
            Sin stock
          </div>
        ) : (
          <>
            {" "}
            <div className="mt-2 mb-5 flex flex-col items-start justify-between">
              <h4 className="text-lg font-bold text-gray-900">{unit_price}</h4>
              <QuantityCounter
                quantity={quantity}
                handleMinusQuantity={handleMinusQuantity}
                handlePlusQuantity={handlePlusQuantity}
                stock={stock}
              />
            </div>
            <button
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full disabled:bg-slate-800"
              onClick={() => handleAddToCart(id)}
              disabled={stock <= 0}
            >
              Agregar al carrito
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#fff" }}
                className="ml-2"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
