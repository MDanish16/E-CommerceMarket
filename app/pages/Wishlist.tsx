import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="pt-24 pb-8 min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 animate-fade-in">
      <div className="container mx-auto max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 animate-fade-in-up">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8 text-center font-sans animate-slide-in">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 text-lg animate-pulse">Your wishlist is empty.</div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-8">
            {wishlist.map((item) => (
              <li key={item.id} className="flex items-center gap-4 py-4 animate-fade-in-up">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow" />
                <div className="flex-1">
                  <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">{item.name}</h2>
                  <div className="text-gray-500 dark:text-gray-300">${item.price.toFixed(2)}</div>
                </div>
                <button
                  className="ml-2 px-3 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition font-bold"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
                <button
                  className="ml-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all font-bold"
                  onClick={() => addToCart(item)}
                  disabled={!item.availability}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 