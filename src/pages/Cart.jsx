import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = cartItems.filter((item) => {
    console.log(item);
    if (searchTerm === "") {
      return item;
    } else {
      return item.product.title.toLowerCase().includes(searchTerm);
    }
  });

  if (cartItems.length === 0) {
    return <div className="p-10 text-center">Tu carrito está vacío</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tu Carrito</h1>
      <form className="w-full relative">
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 rounded-full bg-slate-950 text-slate-100"
            placeholder="Buscar"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-none rounded-full">
            <FontAwesomeIcon icon={faSearch} color="#fff" />
          </p>
        </div>
      </form>
      {filteredData.map((item) => (
        <div
          key={item.product.id}
          className="flex items-center p-4 border rounded-lg bg-white shadow-md"
        >
          <div className="w-24 h-24 overflow-hidden rounded-md">
            <img
              src={item.product.pictures[0]}
              alt={item.product.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 ml-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.product.title}
            </h3>
            <p className="text-gray-500">Cantidad: {item.quantity}</p>
            <p className="text-lg font-bold text-gray-900">
              {item.total_price_in_shopping_cart}
            </p>
          </div>
          <button
            className="ml-4 text-red-600 hover:text-red-800"
            onClick={() => removeFromCart(item.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Total : {cartTotal}
      </h2>
    </div>
  );
};

export default Cart;
