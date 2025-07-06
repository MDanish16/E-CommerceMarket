import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
  availability: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  description,
  image,
  rating,
  category,
  availability,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group relative">
      <button
        className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow hover:scale-110 transition-transform ${inWishlist ? 'text-pink-500' : 'text-gray-400'}`}
        onClick={(e) => {
          e.stopPropagation();
          inWishlist
            ? removeFromWishlist(id)
            : addToWishlist({ id, name, price, image, availability });
        }}
        aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        tabIndex={0}
      >
        {inWishlist ? (
          <svg className="w-6 h-6 fill-current animate-fade-in" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
        ) : (
          <svg className="w-6 h-6 stroke-current animate-fade-in" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
        )}
      </button>
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {!availability && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-400 text-lg">{'★'.repeat(Math.round(rating))}</span>
          <span className="text-gray-400 text-sm">({rating})</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-blue-600">${price.toFixed(2)}</span>
          <button
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            onClick={() => addToCart({ id, name, price, image, availability })}
            disabled={!availability}
            aria-label="Add to cart"
            tabIndex={0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 