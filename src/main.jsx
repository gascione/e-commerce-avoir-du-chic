import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./routes/Root/Root";
import RouteError from "./components/RouteError/RouteError.jsx";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import { ItemsProvider } from "./context/ItemsProvider.jsx";
import Details from "./pages/Details.jsx";
import {
  UserSessionContext,
  UserSessionProvider,
} from "./context/UserSessionProvider.jsx";
import SignOut from "./components/SignOut/SignOut.jsx";
import { CartProvider } from "./context/CartProvider.jsx";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(UserSessionContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
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
        path: "signout",
        element: <SignOut />,
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
      <UserSessionProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserSessionProvider>
    </ItemsProvider>
  </React.StrictMode>
);
