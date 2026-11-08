import React from "react";

const About = () => {
  const aboutCards = [
    {
      title: "Our Vision",
      description:
        "To become the most reliable brand for earbuds, handfree, and smartwatches in the region.",
    },
    {
      title: "Our Mission",
      description:
        "To provide innovative, stylish, and affordable gadgets that fit your modern lifestyle.",
    },
    {
      title: "Our Values",
      description:
        "Quality, trust, and customer-first approach guide everything we do.",
    },
    {
      title: "Best Quality",
      description:
        "We focus on offering carefully selected products with excellent quality and performance.",
    },
    {
      title: "Customer Support",
      description:
        "Our team is always ready to help customers and provide a smooth shopping experience.",
    },
    {
      title: "Our Promise",
      description:
        "We promise affordable prices, reliable products, and customer satisfaction with every order.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-5 py-16 font-[Arial,sans-serif] md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl text-center">

        {/* Heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-green-600">
          Who We Are
        </p>

        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          About Us
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
          Welcome to{" "}
          <span className="font-bold text-green-600">HAMMADSHOP</span>,
          your trusted destination for high-quality{" "}
          <strong>Handfree, Earbuds, and Smart Watches</strong>.
          We focus on delivering the best audio and wearable experience
          to our valued customers. Our mission is simple: to provide
          top-notch products at affordable prices while ensuring
          customer satisfaction every time.
        </p>

        {/* About Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="mb-3 text-xl font-bold text-gray-800">
                {card.title}
              </h2>

              <p className="text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;