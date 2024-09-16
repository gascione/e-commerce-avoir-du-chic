import { faBars, faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { UserSessionContext } from "../../context/UserSessionProvider";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isLoggedIn, handleLogin, handleLogout } =
    useContext(UserSessionContext);
  const { cartItems } = useContext(CartContext);
  const handleLinkClick = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <nav
        id="nav"
        className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-950 text-slate-50"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="flex justify-between w-full lg:w-auto">
            <NavLink to="/" className="logo">
              Blackmarket
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#f8fafc" }}
                className={navbarOpen ? "hidden" : "block"}
              />
            </button>
          </div>
          <div
            className={`lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto ${
              navbarOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row list-none items-center justify-center w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="lg:hidden mb-4"
              >
                <FontAwesomeIcon icon={faX} style={{ color: "#f8fafc" }} />
              </button>
              <li className="nav-item px-3 py-2 text-white text-center">
                <NavLink to="/" onClick={handleLinkClick}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                <NavLink to="about" onClick={handleLinkClick}>
                  Sobre Nosotros
                </NavLink>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item px-3 py-2 text-white text-center">
                    <button
                      onClick={() => {
                        handleLogout();
                        handleLinkClick();
                      }}
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                  <li className="nav-item px-3 py-2 text-white text-center">
                    <NavLink
                      to="cart"
                      className="relative inline-block"
                      onClick={handleLinkClick}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ color: "#f8fafc" }}
                      />
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <li className="nav-item px-3 py-2 text-white text-center">
                    <NavLink to="signup">Registrarse</NavLink>
                  </li>
                  <li className="nav-item px-3 py-2 text-white text-center">
                    <NavLink to="login">Iniciar Sesión</NavLink>
                  </li>{" "}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
