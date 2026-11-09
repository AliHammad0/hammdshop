
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "TH Pods Gen 5",
    tagline: "Bass Reborn",
    price: 6000,
    oldPrice: 10000,
    discount: 40,
    rating: 4.8,
    image: "https://techhunk.pk/cdn/shop/files/TH_Pods_Gen_5_01.webp?v=1789383682&width=1200",
    link: "https://techhunk.pk/products/th-pods-gen-5",
  },
  {
    id: 2,
    name: "TH Gen-Z Earbuds",
    tagline: "Clear Calling",
    price: 3350,
    oldPrice: 5599,
    discount: 40,
    rating: 4.9,
    image: "https://techhunk.pk/cdn/shop/files/TH_Gen-Z_Earbuds_03.webp?v=1789383512&width=1200",
    link: "https://techhunk.pk/products/th-gen-z-earbuds",
  },
  {
    id: 3,
    name: "TH Pods Gen 3 Earbuds",
    tagline: "Powerful Sound",
    price: 4950,
    oldPrice: 10000,
    discount: 50,
    rating: 4.8,
    image: "https://techhunk.pk/cdn/shop/files/TH_Pods_Gen_3_Earbuds_01.webp?v=1789383266&width=1200",
    link: "https://techhunk.pk/products/th-pods-gen-3-white-earbuds",
  },
  {
    id: 4,
    name: "TH Nano Earbuds",
    tagline: "Smallest Earbuds Ever",
    price: 3950,
    oldPrice: 4800,
    discount: 17,
    rating: 4.9,
    image: "https://techhunk.pk/cdn/shop/files/TH_Nano_Earbuds_01_0233bad7-0cdf-4ebb-b677-9a883152b5fd.webp?v=1789383380&width=1200",
    link: "https://techhunk.pk/products/th-nano-earbuds",
  },
  {
    id: 5,
    name: "TH Flex Earbuds",
    tagline: "Software Based Earbuds",
    price: 4950,
    oldPrice: 7000,
    discount: 29,
    rating: 4.9,
    image: "https://techhunk.pk/cdn/shop/files/Illuminated_charging_case_with_100_display.webp?v=1793110512&width=1200",
    link: "https://techhunk.pk/products/th-flex",
  },
  {
    id: 6,
    name: "TH Steel X Earbuds",
    tagline: "Limited Stock",
    price: 5450,
    oldPrice: 9917,
    discount: 45,
    rating: 4.7,
    image: "https://techhunk.pk/cdn/shop/files/1_17fbedab-588c-492a-bb8c-eeeec258ea7b.webp?v=1791027664&width=1200",
    link: "https://techhunk.pk/products/th-steel-x",
  },
  {
    id: 7,
    name: "TH Flick Earbuds",
    tagline: "Futuristic Design",
    price: 3500,
    oldPrice: 5000,
    discount: 30,
    rating: 4.8,
    image: "https://techhunk.pk/cdn/shop/files/TH_Flick_Earbuds_01.webp?v=1789383420&width=1200",
    link: "https://techhunk.pk/products/th-flick-earbuds",
  },
  {
    id: 8,
    name: "AirPods Pro 2 Earbuds (Carbon Titanium Edition)",
    tagline: "Premium Sound",
    price: 3450,
    oldPrice: 6000,
    discount: 42,
    rating: 4.9,
    image: "https://techhunk.pk/cdn/shop/files/AirPods_Pro_2_Carbon_Titanium_01.webp?v=1789383458&width=1200",
    link: "https://techhunk.pk/products/pods-pro-2-carbon-titanium-earbuds",
  },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white font-[Arial] text-black">

      {/* Hero Section */}
      <section className="bg-[#f7f7f7] px-4 py-14 text-center sm:py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-gray-500">
          Premium Audio Collection
        </p>

        <h1 className="text-3xl font-bold sm:text-5xl">
          Wireless Earbuds
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
          Experience powerful bass, crystal clear calls and
          premium sound with our latest earbuds collection.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 bg-black" />

        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gray-600">
          Trusted by 1M+ Customers Nationwide
        </p>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Our Earbuds Collection
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Discover your perfect sound
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold">
              {products.length} Products
            </p>
            <p className="text-xs text-gray-400">
              Latest Collection
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">

          {products.map((product) => (
            <div key={product.id} className="group min-w-0">

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-[#f6f6f6]">

                <a href={product.link} target="_blank" rel="noreferrer">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-5"
                  />
                </a>

                {/* Discount */}
                <span className="absolute left-2 top-2 bg-black px-2 py-1 text-[10px] font-bold text-white sm:left-3 sm:top-3 sm:px-3">
                  {product.discount}% OFF
                </span>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Toggle wishlist"
                  className={`absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:text-red-500 sm:right-3 sm:top-3 sm:h-9 sm:w-9 ${
                    wishlist.includes(product.id)
                      ? "text-red-500"
                      : "text-gray-600"
                  }`}
                >
                  <FaHeart size={14} />
                </button>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-center gap-2 bg-black py-3 text-xs font-bold uppercase tracking-wide text-white transition-transform duration-300 group-hover:translate-y-0 hover:bg-gray-800"
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>

              </div>

              {/* Product Details */}
              <div className="pt-4">

                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {product.tagline}
                </p>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block min-h-10 text-sm font-bold leading-5 text-gray-900 hover:text-gray-500 sm:text-base"
                >
                  {product.name}
                </a>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1">
                  <div className="flex gap-0.5 text-[11px] text-[#e6a817]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-600">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold sm:text-base">
                    Rs. {product.price.toLocaleString("en-PK")}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
                    Rs. {product.oldPrice.toLocaleString("en-PK")}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Cart Count */}
        {/* <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 border border-gray-200 px-6 py-3 text-sm">
            <FaShoppingCart />
            <span>Cart Items: {cart.length}</span>
          </div>
        </div> */}

      </section>

      {/* FAQ Section */}
      {/* <section className="bg-[#f7f7f7] px-4 py-16 sm:px-6">

        <div className="mx-auto max-w-3xl">

          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[4px] text-gray-500">
            Got Questions
          </p>

          <h2 className="mb-10 text-center text-3xl font-bold">
            We've Got Answers!
          </h2>

          <div className="space-y-3">

            {[
              {
                question: "Do these earbuds work with Android and iPhone?",
                answer:
                  "Yes, Bluetooth earbuds are generally compatible with Android and iOS devices. Check individual product specifications for details.",
              },
              {
                question: "What is the difference between ANC and ENC?",
                answer:
                  "ANC helps reduce surrounding noise while listening. ENC helps reduce background noise during calls.",
              },
              {
                question: "Are these earbuds suitable for gaming?",
                answer:
                  "Some earbuds offer low-latency gaming modes. Check the specifications of each model before purchasing.",
              },
              {
                question: "Do earbuds support fast charging?",
                answer:
                  "Charging features vary by model. Please check the individual product details for supported charging options.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold">
                  {faq.question}

                  <span className="text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Product;
