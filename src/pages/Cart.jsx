import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import ItemsCart from "../components/ItemsCart";

const Cart = () => {
  const { cartItems, cartTotal, cartCheckout } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const handleSort = (order) => {
    setSortOrder(order);
  };

  const filteredData = cartItems
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else {
        return item.product.title.toLowerCase().includes(searchTerm);
      }
    })
    .sort((a, b) => {
      const priceA = a.total_price_in_shopping_cart.match(/\d+/);
      const priceB = b.total_price_in_shopping_cart.match(/\d+/);
      if (sortOrder === "ascAlpha") {
        return a.product.title.localeCompare(b.product.title);
      } else if (sortOrder === "desAlpha") {
        return b.product.title.localeCompare(a.product.title);
      } else if (sortOrder === "ascPrice") {
        return priceA - priceB;
      } else if (sortOrder === "desPrice") {
        return priceB - priceA;
      }
      return 0;
    });

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
      <div className="flex flex-col flex-wrap sm:flex-row">
        <button
          className="px-4 py-2 m-2 bg-slate-800 text-white rounded-md hover:bg-slate-900"
          onClick={() => handleSort("ascAlpha")}
        >
          A-Z
        </button>
        <button
          className="px-4 py-2 m-2 bg-slate-800 text-white rounded-md hover:bg-slate-900"
          onClick={() => handleSort("desAlpha")}
        >
          Z-A
        </button>
        <button
          className="px-4 py-2 m-2 bg-slate-800 text-white rounded-md hover:bg-slate-900"
          onClick={() => handleSort("desPrice")}
        >
          Mayor precio
        </button>
        <button
          className="px-4 py-2 m-2 bg-slate-800 text-white rounded-md hover:bg-slate-900"
          onClick={() => handleSort("ascPrice")}
        >
          Menor precio
        </button>
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
          className="sm:ml-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900  flex items-center"
          onClick={cartCheckout}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cart;
