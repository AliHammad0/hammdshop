
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f6f3] px-4 py-12 font-[Arial]">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-xl md:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-black p-12 text-white md:flex">

          <div>
            <h2 className="text-3xl font-bold tracking-wider">
              HAMMAD<span className="text-gray-400">SHOP</span>
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[4px] text-gray-400">
              Premium Electronics
            </p>
          </div>

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[3px] text-gray-400">
              Welcome Back
            </p>
            <h1 className="text-4xl font-bold leading-tight">
              Technology <br />
              Meets Your <br />
              Lifestyle.
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Discover premium electronics and explore products
              designed to make your everyday life better.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            © 2026 HAMMADSHOP. All rights reserved.
          </p>

          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-gray-700" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-gray-700" />

        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-12">

          <div className="w-full max-w-md">

            <div className="mb-9">
              <h2 className="text-3xl font-bold text-black">
                Welcome Back!
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Please enter your details to sign in.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Email Address
                </label>

                <div className="flex items-center border border-gray-300 px-4 transition focus-within:border-black">
                  <FaEnvelope className="text-sm text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="h-12 w-full bg-transparent px-3 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Password
                </label>

                <div className="flex items-center border border-gray-300 px-4 transition focus-within:border-black">
                  <FaLock className="text-sm text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="h-12 w-full bg-transparent px-3 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-black"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-black" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-semibold text-black hover:text-gray-500"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="h-12 w-full bg-black text-sm font-bold uppercase tracking-wider text-white transition hover:bg-gray-800"
              >
                Sign In
              </button>

            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="h-12 w-full border border-gray-300 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Continue with Google
            </button>

            {/* Signup Link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-black underline underline-offset-4"
              >
                Create Account
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
