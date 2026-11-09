
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaEye,
  FaHeart,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Headphones",
    price: 5499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Earbuds",
    category: "Earbuds",
    price: 3999,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
  },
  {
    id: 3,
    name: "Smart Watch Series 9",
    category: "Smart Watches",
    price: 7999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 4,
    name: "Digital Camera",
    category: "Cameras",
    price: 12999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  },
  {
    id: 5,
    name: "Premium Gaming Headset",
    category: "Gaming",
    price: 6499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    category: "Speakers",
    price: 4499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
  },
  {
    id: 7,
    name: "Modern Tablet",
    category: "Tablets",
    price: 18999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
  },
  {
    id: 8,
    name: "Wireless Gaming Controller",
    category: "Gaming",
    price: 4999,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600",
  },
  {
    id: 9,
    name: "Premium Laptop",
    category: "Laptops",
    price: 89999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    id: 10,
    name: "Modern Smartphone",
    category: "Mobiles",
    price: 45999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
];

const NewArrivals = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 font-[Arial] sm:px-8 lg:px-16">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-gray-500">
          Just Arrived
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
          New Arrivals
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
          Discover our latest collection of premium electronics
          and explore the newest products.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 bg-black"></div>
      </div>

      {/* Product Count */}
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between border-b border-gray-200 pb-4">
        <p className="text-sm font-medium text-gray-700">
          Showing {products.length} Products
        </p>

        <p className="text-sm text-gray-500">
          Latest Collection
        </p>
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">

        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">

              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-110"
              />

              {/* New Badge */}
              <span className="absolute left-3 top-3 bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                New
              </span>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition ${
                  wishlist.includes(product.id)
                    ? "text-red-500"
                    : "text-gray-600 hover:text-red-500"
                }`}
                aria-label="Add to wishlist"
              >
                <FaHeart size={15} />
              </button>

              {/* Hover Actions */}
              <div className="absolute bottom-3 left-0 flex w-full translate-y-3 justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                <button
                  onClick={() => addToCart(product)}
                  className="flex h-10 items-center gap-2 bg-black px-4 text-xs font-semibold text-white transition hover:bg-gray-800"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

                <button
                  className="flex h-10 w-10 items-center justify-center bg-white text-black transition hover:bg-gray-200"
                  aria-label="View product"
                >
                  <FaEye />
                </button>

              </div>
            </div>

            {/* Product Details */}
            <div className="pt-4">

              <p className="mb-2 text-xs text-gray-500">
                {product.category}
              </p>

              <h3 className="min-h-10 text-sm font-semibold leading-5 text-gray-900 transition hover:text-gray-500 sm:text-base">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-base font-bold text-black">
                  Rs. {product.price.toLocaleString("en-PK")}
                </p>

                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  New
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-gray-200 pt-8 text-center">
        <p className="text-sm text-gray-500">
          You are viewing all {products.length} new arrivals.
        </p>
      </div>

    </div>
  );
};

export default NewArrivals;
