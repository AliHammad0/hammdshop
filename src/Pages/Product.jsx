import React, { useState } from "react";
// import Handfree from "../Images/handree.jfif";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const productsData = [
  { id: 1, name: "Premium Handfree", price: 2499, category: "Handfree",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv3lKb69vGzodL4WS0pgFXa3bPr9p4T5AUJK2842n9w&s" },
  { id: 2, name: "Wireless Earbuds", price: 3999, category: "Earbuds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv3lKb69vGzodL4WS0pgFXa3bPr9p4T5AUJK2842n9w&s" },
  { id: 3, name: "Smart Watch X1", price: 7499, category: "Smart Watch", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmz1vFrCWjf-N8ddDktv8x0GOmztr83DVHMhYQGXqow&s=10" },
  { id: 4, name: "Stylish Handfree", price: 1999, category: "Handfree", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNhrVfP-zIRImeICIENwmYBgQlJIEtIMAIC9Db7Wm3Q&s=10" },
  { id: 5, name: "Pro Earbuds", price: 4299, category: "Earbuds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDH3knatW6oestl2G8bWr44FTbOVexhzSv_j10GHsNg&s" },
  { id: 6, name: "Classic Smart Watch", price: 6999, category: "Smart Watch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrxQ2fk1BorJrcMiOhxOXjucA7fnVIP4678zpxpJoiQ&s" },
  { id: 7, name: "Pro Earbuds", price: 2299, category: "Earbuds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWPhbay4WbhZ1OpaqY8cnn7MG3L8cSUk4jbSeDxQa-Q&s=10" },
  { id: 8, name: "Classic Smart Watch", price: 5999, category: "Smart Watch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sMGwHBVu7FaoeWl2Wglk6zLBMQdFwGi29ysStCSXLA&s=10" },
  { id: 9, name: "Premium Headphones", price: 5499, category: "Headphones", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzonjfzjo7DAsO3C63oK6dNUvFi__F9zY6UZsLgFpPQ&s=10"},
  { id: 10, name: "Wireless Speaker", price: 3499, category: "Speakers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacS1QxM-JN0UqGFNicMWcKNxDXM0QcbmcjjmJy1JDDw&s=10" },
  { id: 11, name: "Bluetooth Headphones", price: 4599, category: "Headphones",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv3lKb69vGzodL4WS0pgFXa3bPr9p4T5AUJK2842n9w&s" },
  // { id: 12, name: "Mobile Accessories", price: 1499, category: "Accessories", img: Handfree },
];

const categories = [
  "All",
  "Handfree",
  "Earbuds",
  "Smart Watch",
  "Headphones",
  "Speakers",
  "Accessories",
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
    <section className="min-h-screen bg-white px-4 py-16 font-[Arial,sans-serif] sm:px-6 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-red-600">
          Our Collection
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Our Products
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
          Discover our latest collection of quality accessories
          designed for your everyday lifestyle.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition duration-300 sm:px-5 sm:text-sm ${
              filter === category
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-red-600 hover:text-red-600"
            }`}
          >
            {category === "All" ? "All Products" : category}
          </button>
        ))}
      </div>

      {/* Filter and Sort */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm font-medium text-gray-600">
          Showing {sortedProducts.length} Products
        </p>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-red-500 sm:w-auto"
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gray-50 p-3 sm:h-52 sm:p-4">
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />

              <button
                aria-label="Add to wishlist"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-red-600 hover:text-white sm:right-3 sm:top-3 sm:h-9 sm:w-9"
              >
                <FaHeart size={14} />
              </button>

              <button
                aria-label="View product"
                className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-red-600 hover:text-white sm:bottom-3 sm:right-3 sm:h-9 sm:w-9"
              >
                <FaEye size={15} />
              </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <p className="mb-1 text-xs text-gray-400">
                {product.category}
              </p>

              <h2 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                {product.name}
              </h2>

              <p className="mt-2 text-sm font-bold text-red-600 sm:text-base">
                Rs. {product.price.toLocaleString("en-PK")}
              </p>

              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 py-2.5 mt-4 text-xs font-medium text-white transition hover:bg-red-600 sm:text-sm">
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