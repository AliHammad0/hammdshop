import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">MyStore</h1>
          <p className="text-gray-400">
            Explore our latest collection of Handfree, Earbuds & Smart Watches
            with the best quality and prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/products" className="hover:text-blue-500 transition">Products</a></li>
            <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">📍 Lahore, Pakistan</p>
          <p className="text-gray-400">📞 +92 300 1234567</p>
          <p className="text-gray-400">✉ support@mystore.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-700 text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-5">
        <p>© {new Date().getFullYear()} MyStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
