import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { filterData } from "../assets/utils";
import ItemsCart from "../components/ItemsCart";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cartItems, cartTotal, cartCheckout } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const handleSort = (order) => {
    setSortOrder(order);
  };

  const filteredData = filterData(cartItems, searchTerm, sortOrder);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        Tu carrito está vacío{" "}
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#000" }}
          className="ml-2"
        />
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Tu Carrito</h1>
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
      <div className="flex flex-wrap sm:flex-nowrap">
        <div className="flex w-full sm:w-auto">
          <button
            className="w-1/2 sm:w-32 px-4 py-2 m-2 bg-slate-900 text-white rounded-md hover:bg-slate-950"
            onClick={() => handleSort("ascAlpha")}
          >
            A-Z
          </button>
          <button
            className="w-1/2 sm:w-32 px-4 py-2 m-2 bg-slate-900 text-white rounded-md hover:bg-slate-950"
            onClick={() => handleSort("desAlpha")}
          >
            Z-A
          </button>
        </div>
        <div className="flex w-full sm:w-auto">
          <button
            className="w-1/2 sm:w-32 px-4 py-2 m-2 bg-slate-900 text-white rounded-md hover:bg-slate-950"
            onClick={() => handleSort("desPrice")}
          >
            Mayor precio
          </button>
          <button
            className="w-1/2 sm:w-32 px-4 py-2 m-2 bg-slate-900 text-white rounded-md hover:bg-slate-950"
            onClick={() => handleSort("ascPrice")}
          >
            Menor precio
          </button>
        </div>
      </div>

      {filteredData.map((item) => (
        <ItemsCart
          title={item.product.title}
          img={item.product.pictures[0]}
          quantityItem={item.quantity}
          totalPrice={item.total_price_in_shopping_cart}
          stock={item.product.stock}
          idItem={item.product.id}
          id={item.id}
          key={item.product.id}
        />
      ))}
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Total : {cartTotal}
        </h2>
        <button
          className="sm:ml-4 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-950  flex items-center"
          onClick={cartCheckout}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cart;
