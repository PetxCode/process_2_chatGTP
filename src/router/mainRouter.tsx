import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Display from "../pages/Display";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Display />,
      },
    ],
  },
]);
