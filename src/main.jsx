import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root/Root";
import RouteError from "./components/RouteError/RouteError.jsx";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import { ItemsProvider } from "./context/ItemsProvider.jsx";
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "products/:itemId",
        element: <Details />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemsProvider>
      <RouterProvider router={router} />
    </ItemsProvider>
  </React.StrictMode>
);
