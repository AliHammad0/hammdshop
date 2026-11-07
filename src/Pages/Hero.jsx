import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Premium Handfree",
      subtitle: "Ultimate Sound Experience",
      desc: "Experience crystal clear sound with noise cancellation technology and premium comfort.",
      btn: "Shop Handfree",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
      color: "from-blue-900 via-blue-700 to-blue-900",
      price: "From $99.99",
      features: ["30hr Battery", "Noise Cancelling", "Wireless"]
    },
    {
      id: 2,
      title: "Trendy Earbuds",
      subtitle: "Wireless Freedom",
      desc: "Advanced wireless earbuds with powerful bass, sleek design, and all-day comfort.",
      btn: "Shop Earbuds",
      img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop&crop=center",
      color: "from-purple-900 via-purple-700 to-purple-900",
      price: "From $79.99",
      features: ["True Wireless", "24hr Case", "Waterproof"]
    },
    {
      id: 3,
      title: "Smart Watches",
      subtitle: "Stay Connected",
      desc: "Premium smart watches with health monitoring, GPS, and seamless connectivity.",
      btn: "Shop Watches",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center",
      color: "from-emerald-900 via-emerald-700 to-emerald-900",
      price: "From $199.99",
      features: ["Health Monitor", "GPS Tracking", "7-Day Battery"]
    },
  ];

  return (
    <section className="relative w-full h-screen text-white overflow-hidden mt-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !w-8'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        speed={1000}
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative w-full h-full bg-gradient-to-br ${slide.color}`}>
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-pulse delay-1000"></div>
              </div>

              <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Text Content */}
                <div className="relative z-10 max-w-2xl space-y-6 animate-fade-in-up">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">🔥 Best Seller</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-3">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-200 font-light">
                      {slide.subtitle}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                    {slide.desc}
                  </p>

                  {/* Price */}
                  <div className="text-2xl font-bold text-white">
                    {slide.price}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {slide.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-xl shadow-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
                      {slide.btn}
                    </button>
                    <button className="px-8 py-4 bg-transparent text-white border-2 border-white/50 hover:border-white rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative z-10 hidden lg:block animate-float">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform scale-110"></div>
                    
                    {/* Image Container */}
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-96 h-96 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-black font-bold text-sm">-20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-next !text-white !w-16 !h-16 after:!text-2xl !mr-8 hover:!scale-110 transition-transform"></div>
        <div className="swiper-button-prev !text-white !w-16 !h-16 after:!text-2xl !ml-8 hover:!scale-110 transition-transform"></div>
      </Swiper>

      {/* Additional Info Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-white/20 z-20">
        <div className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-gray-300">On orders over $50</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Secure Payment</div>
                <div className="text-sm text-gray-300">100% protected</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">↩️</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">30-Day Return</div>
                <div className="text-sm text-gray-300">Money back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .swiper-pagination {
          bottom: 120px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
// dont add Additional Info Bar and Price and change move icons add professional and make 100 % responsible for every mobile phone