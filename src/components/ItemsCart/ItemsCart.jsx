import React from "react";
import useQuantity from "../../hooks/useQuantity";
import Quantity from "../Quantity/Quantity";
import { CartContext } from "../../context/CartProvider";
import { faTrash, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

function ItemsCart({
  title,
  img,
  quantityItem,
  totalPrice,
  stock,
  idItem,
  id,
}) {
  const { removeFromCart } = useContext(CartContext);
  const {
    quantity,
    handleMinusQuantity,
    handlePlusQuantity,
    updateElementToCart,
  } = useQuantity(quantityItem, stock);
  return (
    <div
      key={id}
      className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg bg-white shadow-md mb-4"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-24 h-24 overflow-hidden rounded-md mb-2 sm:mb-0">
          <img src={img} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="ml-4 flex flex-col">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-slate-500">Cantidad Actual: {quantityItem}</p>
          <p className="text-lg font-bold text-slate-900">{totalPrice}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
        <Quantity
          quantity={quantity}
          handleMinusQuantity={handleMinusQuantity}
          handlePlusQuantity={handlePlusQuantity}
        />

        <button
          className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700  flex items-center"
          onClick={() => updateElementToCart(idItem, title)}
        >
          Actualizar
          <FontAwesomeIcon icon={faRefresh} className="ml-2" />
        </button>

        <button
          className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center"
          onClick={() => removeFromCart(id, title)}
        >
          Borrar
          <FontAwesomeIcon icon={faTrash} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default ItemsCart;
