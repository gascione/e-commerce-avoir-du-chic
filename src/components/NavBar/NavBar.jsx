import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                <NavLink to="signup">Sign up</NavLink>
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                <NavLink to="login">Log in</NavLink>
              </li>{" "}
              <li className="nav-item px-3 py-2 text-white text-center">
                <NavLink to="cart" className="relative inline-block">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#f8fafc" }}
                  />
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
