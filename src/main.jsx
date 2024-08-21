import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/LogIn";
import RouteError from "./components/RouteError/RouteError.jsx";
import SignUp from "./components/SignUp";
import { CartProvider } from "./context/CartProvider.jsx";
import { ItemsProvider } from "./context/ItemsProvider.jsx";
import {
  UserSessionContext,
  UserSessionProvider,
} from "./context/UserSessionProvider.jsx";
import "./index.css";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Details from "./pages/Details.jsx";
import Home from "./pages/Home";
import Root from "./routes/Root/Root";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(UserSessionContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

function AuthRoute({ element }) {
  const { isLoggedIn } = useContext(UserSessionContext);
  return isLoggedIn ? <Navigate to="/" /> : element;
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
        element: <AuthRoute element={<Login />} />,
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
    <UserSessionProvider>
      <ItemsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ItemsProvider>
    </UserSessionProvider>
  </React.StrictMode>
);
