import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    "Home",
    "Products",
    "Category",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-black">
            <span className="text-red-600">HAMMAD</span>SHOP
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors duration-200 hover:text-red-600"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-800 hover:text-red-600 transition"
              aria-label="Search"
            >
              <FaSearch size={18} />
            </button>

            <button
              className="relative text-gray-800 hover:text-red-600 transition"
              aria-label="Wishlist"
            >
              <FaHeart size={19} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                2
              </span>
            </button>

            <button
              className="relative text-gray-800 hover:text-red-600 transition"
              aria-label="Shopping cart"
            >
              <FaShoppingCart size={19} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                3
              </span>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl text-gray-800"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 py-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-red-500"
            />
          </div>
        )}

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">
            <ul className="flex flex-col gap-5 text-sm font-medium text-gray-700">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block transition-colors hover:text-red-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;