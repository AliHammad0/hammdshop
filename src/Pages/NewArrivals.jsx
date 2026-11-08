
import React from "react";

const newProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Earbuds",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Smart Watches",
    price: 5499,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Headphones",
    price: 4999,
    image:
      "https://img.nanobanana2.xin/aiweb/nanobanna-2-260604-slug1-4.jpg",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Speakers",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 4299,
    image:
      "https://mechanicalkeyboards.com/cdn/shop/files/25898-Q1BG4-Keychron-C3-Pro-TKL-8K-Keyboard.jpg?v=1775145892&width=1680",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Digital Camera",
    category: "Cameras",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Gaming Controller",
    category: "Gaming",
    price: 5999,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4dbfb65716923.5afd9efd6d450.jpg",
  },
  {
    id: 9,
    name: "Power Bank",
    category: "Accessories",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1609592806596-4d6a7c7a3c1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Premium Laptop",
    category: "Laptops",
    price: 89999,
    image:
      "https://images.squarespace-cdn.com/content/v1/5b4c8261fcf7fd22bff30814/1777893608799-3EWRRJ8I6QV0JZNTQD0Z/2022_Dell%2Bcopy_option1_web.jpg",
  },
];

const NewArrivals = () => {
  return (
    <section className="bg-gray-50 px-5 py-16 font-[Arial,sans-serif] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-green-600">
            Fresh Collection
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            New Arrivals
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
            Explore our latest collection of premium tech products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {newProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-5">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                  NEW
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x600/f3f4f6/374151?text=Image+Not+Available";
                  }}
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
                  {product.category}
                </p>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-2">
                  <p className="text-lg font-bold text-green-700">
                    Rs. {product.price.toLocaleString("en-PK")}
                  </p>

                  <button
                    type="button"
                    onClick={() => alert(`${product.name} added to cart!`)}
                    className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
