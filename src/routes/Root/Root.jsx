import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Layout = () => {
  return (
    <>
      <div>
        <main className="flex flex-col min-h-screen">
          {" "}
          <NavBar />
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
