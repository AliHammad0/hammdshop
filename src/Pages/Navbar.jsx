
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    "Earbuds",
    "Headphones",
    "Smart Watches",
    "Speakers",
    "Accessories",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100 font-[Arial,sans-serif]">
      <div className="container mx-auto px-5 md:px-10">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-black"
          >
            <span className="text-black">HAMMAD</span> SHOP
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">

            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-red-600 transition-colors duration-200"
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
                className="flex items-center gap-2 hover:text-red-600 transition-colors"
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
                <div className="absolute top-full left-0 pt-4 w-56">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">

                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase().replaceAll(" ", "-")}`}
                        onClick={() => setCategoryOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-red-600 transition-colors"
              >
                Contact
              </Link>
            </li>

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

            {/* Mobile Menu Button */}
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

            <ul className="flex flex-col gap-5 text-sm font-semibold text-gray-700">

              {navLinks.slice(0, 2).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-red-600"
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
                        className="text-gray-600 hover:text-red-600"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Contact
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
