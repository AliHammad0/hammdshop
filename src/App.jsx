
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import ProductPage from "./Pages/Product";
import ProductDetails from './Pages/ProductDetails'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductPage />
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
        <Route path="/products" element={<ProductPage />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
