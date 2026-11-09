
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", formData);
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
              Join Our Community
            </p>

            <h1 className="text-4xl font-bold leading-tight">
              Upgrade Your <br />
              Everyday <br />
              Experience.
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Create your account and explore our exclusive
              collection of premium electronics.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            © 2026 HAMMADSHOP. All rights reserved.
          </p>

          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-gray-700" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-gray-700" />

        </div>

        {/* Signup Form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-12">

          <div className="w-full max-w-md">

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black">
                Create Account
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Fill in your details to create your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Full Name
                </label>

                <div className="flex items-center border border-gray-300 px-4 transition focus-within:border-black">
                  <FaUser className="text-sm text-gray-400" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="h-11 w-full bg-transparent px-3 text-sm outline-none"
                  />
                </div>
              </div>

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
                    className="h-11 w-full bg-transparent px-3 text-sm outline-none"
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
                    placeholder="Create a password"
                    minLength={6}
                    required
                    className="h-11 w-full bg-transparent px-3 text-sm outline-none"
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

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>

                <div className="flex items-center border border-gray-300 px-4 transition focus-within:border-black">
                  <FaLock className="text-sm text-gray-400" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className="h-11 w-full bg-transparent px-3 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="text-gray-500 hover:text-black"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 pt-1 text-xs leading-5 text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-black"
                />
                <span>
                  I agree to the Terms & Conditions and Privacy Policy.
                </span>
              </label>

              {/* Signup Button */}
              <button
                type="submit"
                className="h-12 w-full bg-black text-sm font-bold uppercase tracking-wider text-white transition hover:bg-gray-800"
              >
                Create Account
              </button>

            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <button
              type="button"
              className="h-12 w-full border border-gray-300 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-black underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
