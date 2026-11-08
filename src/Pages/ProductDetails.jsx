
import React, { useState } from "react";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaBatteryFull,
  FaHeadphones,
  FaCheckCircle,
  FaPlay,
  FaMinus,
  FaPlus,
  FaChevronDown,
} from "react-icons/fa";

const reviews = [
  {
    name: "Rizwan Khan",
    review: "premium earbuds",
  },
  {
    name: "Rizwan Khan",
    review:
      "Loved these earbuds! Good sound, nice bass, and super comfy. No doubt whatever shown on website exactly received same stuff with awesome packing.",
  },
  {
    name: "Muhammad Rajpoot",
    review:
      "Masha Allah Ma 2 Bar Tech Hunk se Earbuds Magwa Chuka Hu Or Bhhht Zabardast Hain Inki battery Life b Bhhht Achi ha Sound Or Bass Quality B Kafi Zabardast Ha I Like it👌",
  },
  {
    name: "Hameedullah",
    review:
      "Got my air buds and I’m genuinely impressed. Sound is next level, fit is perfect, super comfortable for long use. Battery life is exactly as promised.",
  },
];

const features = [
  { title: "ENC", subtitle: "CLEAR CALLING", icon: <FaHeadphones /> },
  { title: "BASS", subtitle: "SUPREME BASS", icon: <FaBolt /> },
  { title: "GAMING", subtitle: "LOW LATENCY", icon: <FaPlay /> },
  { title: "550 mAh", subtitle: "BATTERY", icon: <FaBatteryFull /> },
];

const tabs = ["Overview", "Specs", "Reviews", "Faqs"];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("GEN Z - White");
  const [activeTab, setActiveTab] = useState("Overview");
  const [mainImage, setMainImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const images = [
    "https://placehold.co/700x700/f5f5f5/222?text=TH+Gen-Z+Earbuds",
    "https://placehold.co/700x700/eeeeee/222?text=Earbuds+Case",
    "https://placehold.co/700x700/f5f5f5/222?text=Earbuds+Details",
  ];

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push({
      name: "TH Gen-Z Earbuds",
      price: 3350,
      color,
      quantity,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const buyNow = () => {
    addToCart();
    // Connect your checkout route here.
  };

  const faqs = [
    {
      question: "Do these earbuds support ENC calling?",
      answer:
        "Yes, these earbuds feature ENC technology for clearer voice calls.",
    },
    {
      question: "What is the battery capacity?",
      answer: "The product features a 550 mAh battery.",
    },
    {
      question: "Do these earbuds have Gaming Mode?",
      answer:
        "Yes, Gaming Mode provides a low-latency audio experience.",
    },
    {
      question: "Can I choose a color?",
      answer: "Yes, you can select your preferred available color.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-[Arial]">

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-5 py-12 grid lg:grid-cols-2 gap-12">

        {/* Images */}
        <div>
          <div className="bg-[#f7f7f7] rounded-2xl overflow-hidden">
            <img
              src={images[mainImage]}
              alt="TH Gen-Z Earbuds"
              className="w-full aspect-square object-contain p-8"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`rounded-xl overflow-hidden border-2 ${
                  mainImage === index
                    ? "border-black"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`Earbuds ${index + 1}`}
                  className="w-full aspect-square object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <p className="text-sm text-gray-500 mb-3">
            TECH HUNK / EARBUDS
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            TH Gen-Z Earbuds
          </h1>

          <p className="text-gray-600 mb-5">
            ENC Clear Calling | Supreme Bass | Gaming Mode
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-yellow-500 gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>
            <span className="font-bold">4.9</span>
            <span className="text-gray-500">(279+ Reviews)</span>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-3xl font-bold">Rs.3,350</span>
            <span className="text-xl text-gray-400 line-through">
              Rs.5,599
            </span>
          </div>

          <p className="text-green-700 font-semibold mb-7">
            Save Rs.2,249
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-sm">
                  {feature.title}
                </h3>
                <p className="text-[10px] text-gray-500 mt-1">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Color */}
          <div className="mb-7">
            <p className="font-semibold mb-3">
              Color: <span className="font-normal">{color}</span>
            </p>

            <button
              onClick={() => setColor("GEN Z - White")}
              className={`border rounded-lg px-5 py-3 text-sm ${
                color === "GEN Z - White"
                  ? "border-black bg-gray-100"
                  : "border-gray-300"
              }`}
            >
              GEN Z - White
            </button>
          </div>

          {/* Quantity */}
          <div className="mb-7">
            <p className="font-semibold mb-3">Quantity:</p>

            <div className="flex items-center border border-gray-300 rounded-lg w-fit">
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="p-4"
              >
                <FaMinus size={12} />
              </button>

              <span className="px-5 font-semibold">{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="p-4"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={addToCart}
              className="bg-black text-white py-4 rounded-lg font-bold flex justify-center items-center gap-3 hover:bg-gray-800 transition"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              className="border-2 border-black py-4 rounded-lg font-bold hover:bg-black hover:text-white transition"
            >
              Buy it now
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-[#f8f8f8] py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            Customer Reviews
          </h2>

          <div className="flex justify-center items-center gap-2 mb-10">
            <div className="flex text-yellow-500 gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>
            <span className="font-bold">5.0</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100"
              >
                <h3 className="font-bold mb-2">
                  TH Gen-Z Earbuds
                </h3>

                <div className="flex text-yellow-500 gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={13} />
                  ))}
                  <span className="text-black text-xs ml-2">
                    (5.0)
                  </span>
                </div>

                <p className="text-green-700 text-xs font-semibold mb-3 flex items-center gap-1">
                  <FaCheckCircle />
                  Verified Purchase
                </p>

                <p className="text-gray-600 text-sm leading-6 mb-4">
                  "{review.review}"
                </p>

                <p className="font-bold text-sm">
                  - {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">
          A Closer Look at the Earbuds
        </h2>

        <p className="text-gray-500 text-center mb-10">
          Explore the TH Gen-Z Earbuds
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative bg-gray-100 rounded-xl aspect-video flex items-center justify-center"
            >
              <button className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center">
                <FaPlay />
              </button>

              <span className="absolute bottom-4 left-4 text-sm font-semibold">
                Customer video thumbnail
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Information Tabs */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold text-sm ${
                activeTab === tab
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === "Overview" && (
            <div className="text-gray-600 leading-8">
              <h3 className="text-xl text-black font-bold mb-4">
                TH Gen-Z Earbuds
              </h3>
              Experience ENC clear calling, supreme bass and
              gaming mode in one stylish pair of earbuds.
              Designed for everyday listening, calls and gaming.
            </div>
          )}

          {activeTab === "Specs" && (
            <div className="border rounded-xl overflow-hidden">
              {[
                ["Product", "TH Gen-Z Earbuds"],
                ["Calling", "ENC Clear Calling"],
                ["Sound", "Supreme Bass"],
                ["Gaming", "Gaming Mode"],
                ["Battery", "550 mAh"],
                ["Color", "GEN Z - White"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b last:border-0 p-4 text-sm"
                >
                  <span className="font-semibold">{label}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="space-y-5">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-5">
                  <div className="flex text-yellow-500 mb-2">
                    ★★★★★
                  </div>
                  <p className="text-gray-600 mb-2">
                    {review.review}
                  </p>
                  <p className="font-bold">{review.name}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Faqs" && (
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    className="w-full flex justify-between items-center p-5 text-left font-semibold"
                  >
                    {faq.question}
                    <FaChevronDown
                      className={`transition ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-7">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;
