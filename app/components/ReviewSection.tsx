import React from "react";

const reviews = [
  {
    name: "Alice",
    avatar: "A",
    rating: 5,
    text: "Absolutely love the products! Fast delivery and great quality. Highly recommend YOUR BIG MARKET!",
  },
  {
    name: "Bob",
    avatar: "B",
    rating: 4,
    text: "Good prices and a wide selection. The customer service was very helpful.",
  },
  {
    name: "Cathy",
    avatar: "C",
    rating: 5,
    text: "The best online shopping experience I've had. Will shop again!",
  },
];

export default function ReviewSection() {
  return (
    <div className="my-16 animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8 font-sans animate-slide-in">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex-1 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-4 border-t-4 border-blue-400 animate-fade-in-up hover:scale-105 transition-transform duration-300"
          >
            <span className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full font-bold text-3xl shadow mb-2">
              {review.avatar}
            </span>
            <div className="flex gap-1 text-yellow-400 text-xl">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>
            <p className="text-gray-700 text-center italic">"{review.text}"</p>
            <div className="font-semibold text-blue-700">{review.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 