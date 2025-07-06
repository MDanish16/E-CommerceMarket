import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0 animate-fade-in">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600 font-sans tracking-tight" aria-label="Go to homepage">E-Shop</Link>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-600 transition-colors" aria-label="Home">Home</Link>
          <Link to="/shop" className="hover:text-blue-600 transition-colors" aria-label="Shop">Shop</Link>
          <Link to="/cart" className="hover:text-blue-600 transition-colors" aria-label="Cart">Cart</Link>
          <Link to="/wishlist" className="hover:text-pink-500 transition-colors flex items-center gap-1" aria-label="Wishlist">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
            Wishlist
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-bold text-lg shadow">
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
              <Link to="/login" className="hover:text-blue-600 transition-colors">Login</Link>
              <Link to="/signup" className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all font-bold">Sign Up</Link>
            </>
          )}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
} 