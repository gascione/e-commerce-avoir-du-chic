import React from "react";
import Item from "../components/Item/Item";
import ItemsList from "../components/ItemsList/ItemsList";

const Home = () => {
  return (
    <>
      <section className="bg-home bg-center bg-cover min-h-96">
        <div className="h-96 mx-auto sm:py-16 lg:px-6 backdrop-blur-sm bg-black bg-opacity-50 flex items-center">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-slate-50">
              Blackmarket
            </h2>
            <p className="mb-6 font-light text-slate-200 md:text-lg">
              Lo mejor en moda y diseño, justo para ti.
            </p>
            <a
              href="#itemsList"
              className="text-slate-900 bg-slate-50 hover:bg-slate-500 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none scroll-smooth"
            >
              Buy now
            </a>
          </div>
        </div>
      </section>
      <div id="itemsList">
        {" "}
        <ItemsList />
      </div>
    </>
  );
};

export default Home;
