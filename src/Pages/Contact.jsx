import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-5 py-16 font-[Arial,sans-serif] md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-md sm:p-8 md:p-10">

        {/* Heading */}
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Contact Us
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-gray-600 md:text-base">
          Have questions or need support? Fill out the form below and
          we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 md:col-span-2"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 md:col-span-2"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-gray-900 md:col-span-2"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 border-t border-gray-100 pt-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Or Reach Us Directly
          </h2>

          <div className="space-y-3 text-sm text-gray-600">
            <p>📞 +92 300 1234567</p>
            <p>📧 support@hammadshop.com</p>
            <p>🏬 Lahore, Pakistan</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;