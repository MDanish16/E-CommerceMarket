import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="pt-24 pb-8 min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 animate-fade-in">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8 text-center font-sans animate-slide-in">Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-lg animate-pulse">Your cart is empty.</div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-8">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4 animate-fade-in-up">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow" />
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-gray-800">{item.name}</h2>
                    <div className="text-gray-500">${item.price.toFixed(2)}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3 font-semibold text-blue-700">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={!item.availability}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="ml-4 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition font-bold"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 animate-fade-in">
              <div className="text-xl font-bold text-blue-700">Total: ${total.toFixed(2)}</div>
              <button
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg shadow hover:from-blue-500 hover:to-pink-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            <button
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-bold"
              onClick={() => alert('Proceed to checkout! (Demo)')}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
} 