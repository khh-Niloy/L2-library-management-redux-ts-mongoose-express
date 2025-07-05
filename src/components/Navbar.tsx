import type { INavbar } from "@/interfaces/navbar.interface";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navbarMenu: INavbar[] = [
    { label: "Home", links: "/" },
    { label: "All Books", links: "/all-books" },
    { label: "Add Book", links: "/create-book" },
    { label: "Borrow Summary", links: "/borrow-summary" },
  ];

  const navbarList = navbarMenu.map(({ label, links }) => (
    <Link to={links}>
      <li className="hover:font-medium hover:underline">{label}</li>
    </Link>
  ));

  return (
    <div className="navbar bg-[#0f172a] text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow space-x-10"
          >
            {navbarList}
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost text-xl">BookVault</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">{navbarList}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
