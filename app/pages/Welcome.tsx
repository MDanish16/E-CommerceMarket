import React from "react";
import { Link } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";

export default function Welcome() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 animate-fade-in flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 opacity-30 blur-2xl animate-slide-in" />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 mb-6 animate-slide-in font-sans tracking-tight drop-shadow-lg">
          Welcome to YOUR BIG MARKET
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center animate-fade-in-up max-w-2xl">
          Discover amazing deals, trending products, and exclusive offers. Shop smart, shop big, shop with us!
        </p>
        <Link
          to="/shop"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg text-xl font-bold hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 animate-fade-in-up"
        >
          Start Shopping
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-8 pb-8 animate-fade-in-up">
        <img src="/images/headphones.jpg" alt="Headphones" className="w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white transform hover:scale-105 transition" />
        <img src="/images/smartwatch.jpg" alt="Smart Watch" className="w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white transform hover:scale-105 transition" />
        <img src="/images/shoes.jpg" alt="Shoes" className="w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white transform hover:scale-105 transition" />
      </div>
      <ReviewSection />
    </div>
  );
} 