import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

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
