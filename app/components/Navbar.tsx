import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="glass sticky top-0 left-0 w-full z-30 backdrop-blur-lg bg-opacity-80 shadow-lg border-b border-white/20 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-sans tracking-tight drop-shadow-lg" aria-label="Go to homepage">E-Shop</Link>
        <div className="flex space-x-8 items-center">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg" aria-label="Home">Home</Link>
          <Link to="/shop" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg" aria-label="Shop">Shop</Link>
          <Link to="/cart" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg" aria-label="Cart">Cart</Link>
          <Link to="/wishlist" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors flex items-center gap-1 font-medium text-lg" aria-label="Wishlist">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
            Wishlist
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-bold text-lg shadow">
                  {user.name[0].toUpperCase()}
                </span>
                <span className="hidden sm:inline font-semibold">{user.name.split(" ")[0]}</span>
              </Link>
              <button
                onClick={() => { logout(); navigate("/login"); }}
                className="ml-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg shadow hover:from-blue-500 hover:to-pink-500 transition-all font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg">Login</Link>
              <Link to="/signup" className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all font-bold">Sign Up</Link>
            </>
          )}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
} 