
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Premium Handfree",
      subtitle: "Ultimate Sound Experience",
      desc: "Experience crystal clear sound with noise cancellation technology and premium comfort.",
      btn: "Shop Handfree",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&h=700&fit=crop&crop=center",
      color: "from-blue-950 via-blue-800 to-slate-950",
      features: ["30hr Battery", "Noise Cancelling", "Wireless"],
    },
    {
      id: 2,
      title: "Trendy Earbuds",
      subtitle: "Wireless Freedom",
      desc: "Advanced wireless earbuds with powerful bass, sleek design, and all-day comfort.",
      btn: "Shop Earbuds",
      img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=700&h=700&fit=crop&crop=center",
      color: "from-purple-950 via-purple-800 to-slate-950",
      features: ["True Wireless", "24hr Case", "Waterproof"],
    },
    {
      id: 3,
      title: "Smart Watches",
      subtitle: "Stay Connected",
      desc: "Premium smart watches with health monitoring, GPS, and seamless connectivity.",
      btn: "Shop Watches",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&h=700&fit=crop&crop=center",
      color: "from-emerald-950 via-emerald-800 to-slate-950",
      features: ["Health Monitor", "GPS Tracking", "7-Day Battery"],
    },
  ];

  return (
    <section className="mt-20 w-full overflow-hidden font-[Arial,sans-serif]">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-2.5 !h-2.5 !mx-1.5 !opacity-100",
          bulletActiveClass: "!bg-white !w-7 !rounded-full",
        }}
        loop={true}
        speed={800}
        className="hero-slider w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div
              className={`relative flex min-h-[680px] lg:min-h-[calc(100svh-80px)] items-center overflow-hidden bg-gradient-to-br ${slide.color}`}
            >

              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

                <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:30px_30px]" />

              </div>

              <div className="relative z-10 container mx-auto grid w-full grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16">

                {/* Text Content */}
                <div className="order-2 text-center lg:order-1 lg:text-left">

                  {/* Badge */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    <span className="text-xs font-semibold tracking-wider text-white sm:text-sm">
                      BEST COLLECTION
                    </span>

                  </div>

                  {/* Title */}
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">

                    {slide.title}

                  </h1>

                  {/* Subtitle */}
                  <h2 className="mt-4 text-xl font-medium text-white/80 sm:text-2xl md:text-3xl">

                    {slide.subtitle}

                  </h2>

                  {/* Description */}
                  <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-200 sm:text-base md:text-lg lg:mx-0">

                    {slide.desc}

                  </p>

                  {/* Features */}
                  <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">

                    {slide.features.map((feature, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm sm:text-sm"
                      >
                        <span className="mr-1.5 text-green-300">✓</span>
                        {feature}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-bold text-gray-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-100 sm:text-base"
                    >
                      {slide.btn}
                    </Link>

                    <Link
                      to="/product-details"
                      className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900 sm:text-base"
                    >
                      Learn More
                    </Link>

                  </div>

                </div>

                {/* Product Image */}
                <div className="order-1 flex justify-center lg:order-2">

                  <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px]">

                    {/* Image Glow */}
                    <div className="absolute inset-5 rounded-full bg-white/20 blur-3xl" />

                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:p-6 md:p-8">

                      <img
                        src={slide.img}
                        alt={slide.title}
                        loading={slide.id === 1 ? "eager" : "lazy"}
                        className="aspect-square w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
                      />

                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/20 bg-white text-center shadow-xl sm:-right-5 sm:-top-5 sm:h-20 sm:w-20">

                      <span className="text-xs font-bold text-gray-900 sm:text-sm">
                        PREMIUM
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Styling */}
      <style>
        {`
          .hero-slider .swiper-pagination {
            bottom: 22px !important;
          }

          .hero-slider .swiper-pagination-bullet {
            transition: all 0.3s ease;
          }

          @media (max-width: 640px) {
            .hero-slider .swiper-pagination {
              bottom: 12px !important;
            }
          }
        `}
      </style>

    </section>
  );
};

export default Hero;
