import {
  faSearch,
  faTrash,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import ItemsCart from "../components/ItemsCart";

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = cartItems.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else {
      return item.product.title.toLowerCase().includes(searchTerm);
    }
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
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Total : {cartTotal}
      </h2>
    </div>
  );
};

export default Cart;
