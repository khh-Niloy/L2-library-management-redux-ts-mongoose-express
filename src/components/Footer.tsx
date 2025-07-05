import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerMenu = [
    { label: "Home", links: "/" },
    { label: "All Books", links: "/all-books" },
    { label: "Add Book", links: "/create-book" },
    { label: "Borrow Summary", links: "/borrow-summary" },
  ];

  const footerList = footerMenu.map(({ label, links }) => (
    <Link to={links}>
      <li className="hover:text-white transition">{label}</li>
    </Link>
  ));

  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6 md:px-20 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            📚 BookVault
          </h2>
          <p className="text-sm text-gray-400">
            A next-gen library platform. Search, manage, and borrow books with a
            modern touch.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400 text-sm">{footerList}</ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="text-gray-400 hover:text-white transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="text-gray-400 hover:text-white transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="text-gray-400 hover:text-white transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="text-gray-400 hover:text-white transition" />
            </a>
            <a href="#" aria-label="GitHub">
              <Github className="text-gray-400 hover:text-white transition" />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4 flex items-center gap-2">
            <Mail size={16} /> support@bookvault.ai
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        Copyright © {new Date().getFullYear()}, BookVault. All rights reserved.
      </div>
    </footer>
  );
}
