import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { CartContext } from "../../context/CartProvider";

const Layout = () => {
  return (
    <>
      <div>
        <main>
          <NavBar />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
