import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-32 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950 animate-fade-in">
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 animate-slide-in mb-4">404</h1>
      <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8 animate-fade-in-up text-center">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg text-xl font-bold hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Go to homepage"
      >
        Go to Homepage
      </Link>
    </div>
  );
} 