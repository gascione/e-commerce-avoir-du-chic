import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root/Root";
import RouteError from "./components/RouteError/RouteError.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart";

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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
