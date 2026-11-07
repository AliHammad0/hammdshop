import React, { useState } from "react";
import Handfree from "../Images/handree.jfif";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const productsData = [
  { id: 1, name: "Premium Handfree", price: 2499, category: "Handfree", img: Handfree },
  { id: 2, name: "Wireless Earbuds", price: 3999, category: "Earbuds", img: Handfree },
  { id: 3, name: "Smart Watch X1", price: 7499, category: "Smart Watch", img: Handfree },
  { id: 4, name: "Stylish Handfree", price: 1999, category: "Handfree", img: Handfree },
  { id: 5, name: "Pro Earbuds", price: 4299, category: "Earbuds", img: Handfree },
  { id: 6, name: "Classic Smart Watch", price: 6999, category: "Smart Watch", img: Handfree },
  { id: 7, name: "Pro Earbuds", price: 2299, category: "Earbuds", img: Handfree },
  { id: 8, name: "Classic Smart Watch", price: 5999, category: "Smart Watch", img: Handfree },
];

const ProductPage = () => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts =
    filter === "All"
      ? productsData
      : productsData.filter((product) => product.category === filter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "lowToHigh") return a.price - b.price;
    if (sort === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <section className="min-h-screen bg-white px-5 py-16 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-red-600">
          Our Collection
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Our Products
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
          Discover our latest collection of quality accessories
          designed for your everyday lifestyle.
        </p>
      </div>

      {/* Filter and Sort */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <p className="text-sm font-medium text-gray-600">
          Showing {sortedProducts.length} Products
        </p>

        <div className="flex flex-wrap gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-red-500"
          >
            <option value="All">All Categories</option>
            <option value="Handfree">Handfree</option>
            <option value="Earbuds">Earbuds</option>
            <option value="Smart Watch">Smart Watch</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-red-500"
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">

        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-lg border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gray-50 p-4 sm:h-56">
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />

              {/* Wishlist */}
              <button
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FaHeart size={15} />
              </button>

              {/* View Button */}
              <button
                aria-label="View product"
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FaEye size={16} />
              </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-col p-3 sm:p-4">
              <p className="mb-1 text-xs text-gray-400">
                {product.category}
              </p>

              <h2 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                {product.name}
              </h2>

              <p className="mt-2 text-base font-bold text-red-600">
                Rs. {product.price.toLocaleString("en-PK")}
              </p>

              {/* Add to Cart */}
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 py-2.5 text-xs font-medium text-white transition hover:bg-red-600 sm:text-sm">
                <FaShoppingCart size={14} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="py-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            No Products Found
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Try selecting another category.
          </p>
        </div>
      )}

    </section>
  );
};

export default ProductPage;