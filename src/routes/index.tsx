import { createBrowserRouter } from "react-router-dom";
import { ErrorRouter } from "../modules/ErrorRouter";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login/login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorRouter />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorRouter />,
  },
]);
