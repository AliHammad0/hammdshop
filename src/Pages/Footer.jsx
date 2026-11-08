import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 font-[Arial,sans-serif] text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-4 md:px-20">

        {/* Logo & Description */}
        <div>
          <h1 className="mb-3 text-2xl font-bold text-white">
            MyStore
          </h1>
          <p className="text-gray-400">
            Explore our latest collection of Handfree, Earbuds & Smart Watches
            with the best quality and prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li><a href="/" className="transition hover:text-blue-500">Home</a></li>
            <li><a href="/products" className="transition hover:text-blue-500">Products</a></li>
            <li><a href="/about" className="transition hover:text-blue-500">About Us</a></li>
            <li><a href="/contact" className="transition hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Contact Us
          </h2>
          <p className="text-gray-400">📍 Lahore, Pakistan</p>
          <p className="text-gray-400">📞 +92 300 1234567</p>
          <p className="text-gray-400">✉ support@mystore.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-2xl text-gray-400 transition hover:text-blue-500"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="text-2xl text-gray-400 transition hover:text-blue-400"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="text-2xl text-gray-400 transition hover:text-pink-500"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-2xl text-gray-400 transition hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} MyStore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;