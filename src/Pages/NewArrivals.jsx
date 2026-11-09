
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <section className="min-h-screen bg-white px-4 py-12 font-[Arial] sm:px-8 lg:px-12">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-gray-500">
          Latest Collection
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
          New Arrivals
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
          Discover our latest collection of premium electronics
          and explore the newest products.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 bg-black" />
      </div>

      {/* Product Toolbar */}
      <div className="mx-auto mb-7 flex max-w-7xl items-center justify-between border-b border-gray-200 pb-4">
        <p className="text-sm font-semibold text-gray-800">
          {products.length} Products
        </p>

        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          New Collection
        </p>
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="group min-w-0 bg-white"
          >

            {/* Product Image */}
            <Link
              to={`/products/${product.id}`}
              className="relative flex h-[180px] items-center justify-center overflow-hidden bg-[#f5f5f5] sm:h-[240px] lg:h-[260px]"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-contain object-center p-3 transition-transform duration-500 group-hover:scale-105 sm:p-5"
              />

              {/* New Badge */}
              <span className="absolute left-2 top-2 bg-black px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:left-3 sm:top-3 sm:text-[10px]">
                New
              </span>
            </Link>

            {/* Product Information */}
            <div className="px-1 pt-4 sm:px-2 sm:pt-5">

              {/* Category */}
              <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:text-xs">
                {product.category}
              </p>

              {/* Product Name */}
              <Link to={`/products/${product.id}`}>
                <h3 className="min-h-10 text-xs font-semibold leading-5 text-[#222222] transition-colors hover:text-gray-500 sm:text-sm">
                  {product.name}
                </h3>
              </Link>

              {/* Price */}
              <div className="mt-2 flex min-h-7 items-center gap-2">
                <span className="text-sm font-bold text-black sm:text-base">
                  Rs. {product.price.toLocaleString("en-PK")}
                </span>
              </div>

              {/* View Product */}
              <Link
                to={`/products/${product.id}`}
                className="mt-3 flex h-10 w-full items-center justify-center border border-black bg-black px-2 text-[10px] font-bold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-white hover:text-black sm:text-xs"
              >
                View Product
              </Link>

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

    </section>
  );
};

export default NewArrivals;
