import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
