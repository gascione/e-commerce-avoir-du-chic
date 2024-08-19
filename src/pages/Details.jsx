import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsProvider";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useQuantity from "../hooks/useQuantity";
import QuantityCounter from "../components/QuantityCounter";

const Details = () => {
  const { itemId } = useParams();
  const { isLoading } = useContext(ItemsContext);
  const { quantity, handleMinusQuantity, handlePlusQuantity, handleAddToCart } =
    useQuantity();
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  const storedItems = JSON.parse(localStorage.getItem("items"));
  const item = storedItems.find((item) => item.id === parseInt(itemId, 10));

  return (
    <div className="flex flex-wrap items-start justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
      <div>
        <img
          src={item.pictures[0]}
          alt={item.title}
          className="object-contain w-80 h-80"
        />
      </div>
      <div className="p-4 w-full md:w-1/2 lg:w-1/3 space-y-2">
        <h1 className="text-4xl font-medium">{item.title}</h1>
        <h2 className="text-3xl font-light">{item.unit_price}</h2>
        <p className="text-slate-600">{item.description}</p>
        <div id="add" className="flex justify-between items-center">
          <QuantityCounter
            quantity={quantity}
            handleMinusQuantity={handleMinusQuantity}
            handlePlusQuantity={handlePlusQuantity}
          />
          <button
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-80%"
            onClick={handleAddToCart}
          >
            Agregar al carrito
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#fff" }}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
