import { createBrowserRouter } from "react-router";
// import App from "../App";
import MainLayout from "../layout/MainLayout";
import Books from "@/Pages/Books";
import CreateBook from "@/Pages/CreateBook";
import BorrowSummary from "@/Pages/BorrowSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "all-books",
        Component: Books,
      },
      {
        path: "create-book",
        Component: CreateBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
      // {
      //   path: "/create-book",
      //   Component: CreateBook
      // },
    ],
  },
]);
