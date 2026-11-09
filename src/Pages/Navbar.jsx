
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="min-h-screen bg-white px-4 py-14 font-[Arial] sm:px-8 lg:px-12">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-7xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-gray-500">
          Get In Touch
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          Have a question or need assistance? We are here to help.
          Send us a message and our team will get back to you.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 bg-black" />
      </div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

        {/* Contact Information */}
        <div className="bg-[#f5f3ef] p-7 sm:p-10">

          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-gray-500">
            Contact Information
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
            Let's Talk
          </h2>

          <p className="mb-10 max-w-md text-sm leading-7 text-gray-600">
            We would love to hear from you. Contact us for product
            inquiries, orders, support, or any other questions.
          </p>

          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                <FaEnvelope size={17} />
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold text-black">
                  Email Address
                </h3>
                <p className="text-sm text-gray-600">
                  support@yourbrand.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                <FaPhoneAlt size={17} />
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold text-black">
                  Phone Number
                </h3>
                <p className="text-sm text-gray-600">
                  +92 300 1234567
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                <FaMapMarkerAlt size={17} />
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold text-black">
                  Our Location
                </h3>
                <p className="text-sm text-gray-600">
                  Pakistan
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                <FaClock size={17} />
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold text-black">
                  Working Hours
                </h3>
                <p className="text-sm text-gray-600">
                  Monday - Saturday
                </p>
                <p className="text-sm text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-200 p-7 sm:p-10">

          <h2 className="mb-2 text-2xl font-bold text-black">
            Send Us a Message
          </h2>

          <p className="mb-8 text-sm text-gray-500">
            Fill out the form below and let us know how we can help.
          </p>

          {submitted && (
            <div className="mb-6 border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              Thank you! Your message has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="h-12 w-full border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="h-12 w-full border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter message subject"
                required
                className="h-12 w-full border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full resize-none border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full bg-black text-xs font-bold uppercase tracking-[2px] text-white transition duration-300 hover:bg-[#333333]"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
