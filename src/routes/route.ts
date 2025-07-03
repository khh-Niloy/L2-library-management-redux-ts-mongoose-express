import { createBrowserRouter } from "react-router";
// import App from "../App";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
]);
