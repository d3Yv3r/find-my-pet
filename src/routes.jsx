import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import App from "@/App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
