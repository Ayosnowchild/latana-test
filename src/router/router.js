import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Payments from "../pages/Payments/payments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Payments />,
      },
    ],
  },
]);
