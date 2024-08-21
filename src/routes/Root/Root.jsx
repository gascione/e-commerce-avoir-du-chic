import { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PopUp from "../../components/PopUp";
import { CartContext } from "../../context/CartProvider";

const Layout = () => {
  const { popUp, handlePopUp, popUpMessage } = useContext(CartContext);
  return (
    <>
      <div>
        <main>
          <NavBar />
          <PopUp
            popUp={popUp}
            closePopUp={handlePopUp}
            popUpMessage={popUpMessage}
          />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
