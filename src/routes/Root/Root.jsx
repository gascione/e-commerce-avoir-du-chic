import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Layout = () => {
  return (
    <>
      <div>
        <main>
          <NavBar />
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
