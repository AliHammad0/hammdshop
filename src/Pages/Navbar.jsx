
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const categories = [
    "Earbuds",
    "Headphones",
    "Smart Watches",
    "Speakers",
    "Accessories",
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white font-[Arial,sans-serif]">

      <div className="container mx-auto px-5 md:px-10">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-black"
          >
            HAMMAD <span className="text-gray-500">SHOP</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 text-sm font-semibold text-gray-700 md:flex">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="transition-colors duration-200 hover:text-red-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Category Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center gap-2 transition-colors hover:text-red-600"
              >
                Category

                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${
                    categoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {categoryOpen && (
                <div className="absolute left-0 top-full w-56 pt-4">
                  <div className="rounded-lg border border-gray-100 bg-white py-2 shadow-xl">

                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase().replaceAll(" ", "-")}`}
                        onClick={() => setCategoryOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-600"
                      >
                        {category}
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                className="transition-colors hover:text-red-600"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4 sm:gap-5">

            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-800 transition hover:text-red-600"
              aria-label="Search"
            >
              <FaSearch size={18} />
            </button>

            {/* Wishlist */}
            <button
              className="relative text-gray-800 transition hover:text-red-600"
              aria-label="Wishlist"
            >
              <FaHeart size={19} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                2
              </span>
            </button>

            {/* Cart */}
            <button
              className="relative text-gray-800 transition hover:text-red-600"
              aria-label="Shopping cart"
            >
              <FaShoppingCart size={19} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                3
              </span>
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="hidden items-center gap-2 text-sm font-semibold text-gray-800 transition hover:text-red-600 sm:flex"
            >
              <FaUser size={16} />
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="hidden items-center gap-2 rounded-sm bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 sm:flex"
            >
              <FaUserPlus size={15} />
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl text-gray-800 md:hidden"
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
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
            />
          </div>
        )}

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-gray-100 py-5 md:hidden">

            <ul className="flex flex-col gap-5 text-sm font-semibold text-gray-700">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block transition hover:text-red-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Categories */}
              <li>
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex w-full items-center justify-between hover:text-red-600"
                >
                  Category

                  <FaChevronDown
                    className={`transition-transform ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {categoryOpen && (
                  <div className="flex flex-col gap-4 pl-4 pt-4">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase().replaceAll(" ", "-")}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setCategoryOpen(false);
                        }}
                        className="text-gray-600 transition hover:text-red-600"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Contact */}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Contact
                </Link>
              </li>

              {/* Mobile Login */}
              <li className="border-t border-gray-100 pt-4">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 hover:text-red-600"
                >
                  <FaSignInAlt size={16} />
                  Login
                </Link>
              </li>

              {/* Mobile Signup */}
              <li>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 hover:text-red-600"
                >
                  <FaUserPlus size={16} />
                  Create Account
                </Link>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
