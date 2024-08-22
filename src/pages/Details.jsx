import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import QuantityCounter from "../components/QuantityCounter";
import { ItemsContext } from "../context/ItemsProvider";
import useQuantity from "../hooks/useQuantity";

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
        {item.stock <= 0 ? (
          <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white">
            Sin stock
          </div>
        ) : (
          <>
            <div className="mt-2 mb-5 flex flex-col items-start justify-between">
              <QuantityCounter
                quantity={quantity}
                handleMinusQuantity={handleMinusQuantity}
                handlePlusQuantity={handlePlusQuantity}
                stock={item.stock}
              />
            </div>
            <button
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-80%"
              onClick={() => handleAddToCart(item.id)}
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

export default Details;
