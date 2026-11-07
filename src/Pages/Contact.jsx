import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need support? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="col-span-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-1 md:col-span-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="col-span-1 md:col-span-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Or reach us directly
          </h2>
          <p className="text-gray-600">📞 +92 300 1234567</p>
          <p className="text-gray-600">📧 support@hammadshop.com</p>
          <p className="text-gray-600">🏬 Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
