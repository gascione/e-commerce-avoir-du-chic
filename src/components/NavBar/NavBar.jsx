import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-950 mb-3 text-slate-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="flex justify-between w-full lg:w-auto">
            <div>Blackmarket</div>
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
                Home
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                About
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                Sign In
              </li>
              <li className="nav-item px-3 py-2 text-white text-center">
                Sign up
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
