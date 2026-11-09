
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Product from "./Pages/Product";
import ProductDetails from './Pages/ProductDetails'
import NewArrivals from './Pages/NewArrivals'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const Home = () => {
  return (
    <>
      <Hero />
      <Product/>
      <NewArrivals/>
      <About />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
