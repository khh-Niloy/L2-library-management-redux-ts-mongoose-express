import { createBrowserRouter } from "react-router";
// import App from "../App";
import MainLayout from "../layout/MainLayout";
import Books from "@/Pages/Books";
import CreateBook from "@/Pages/CreateBook";
import BorrowSummary from "@/Pages/BorrowSummary";
import SingleBook from "@/Pages/SingleBook";
import UpdateBook from "@/Pages/UpdateBook";
import BorrowBook from "@/Pages/BorrowBook";

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
        path: "single-book/:id",
        Component: SingleBook,
      },
      {
        path: "update-book/:id",
        Component: UpdateBook,
      },
      {
        path: "borrow/:id",
        Component: BorrowBook,
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
