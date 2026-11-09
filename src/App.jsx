
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
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
