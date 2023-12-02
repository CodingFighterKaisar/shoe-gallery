import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Cart from "../../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <PrivateRoutes>
          <Cart></Cart>
        </PrivateRoutes>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
],

);
