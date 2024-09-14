import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Payments from "../pages/Payments/payments";
import Investment from "../pages/Investment/Investment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Payments />,
      },
      {
        path: "/investments",
        element: <Investment />,
      },
    ],
  },
]);
