import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to <span className="text-green-600 font-semibold">HAMMADSHOP</span>, 
          your trusted destination for high-quality <strong>Handfree, Earbuds, and Smart Watches</strong>.  
          We focus on delivering the best audio and wearable experience to our valued customers.  
          Our mission is simple: to provide top-notch products at affordable prices while ensuring 
          customer satisfaction every time.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              To become the most reliable brand for earbuds, handfree, and smartwatches in the region.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              To provide innovative, stylish, and affordable gadgets that fit your modern lifestyle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h2>
            <p className="text-gray-600 text-sm">
              Quality, trust, and customer-first approach guide everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
