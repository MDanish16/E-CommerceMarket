import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
  availability: boolean;
}

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/app/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: Product) => p.id === Number(id));
        setProduct(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="pt-24 text-center animate-pulse text-lg">Loading...</div>;
  }
  if (!product) {
    return <div className="pt-24 text-center text-red-500 animate-fade-in">Product not found.</div>;
  }

  return (
    <div className="pt-24 pb-8 min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 animate-fade-in-up">
      <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 animate-fade-in">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg w-full max-w-xs h-72 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <button
            className="self-start px-4 py-2 mb-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold transition-all duration-200"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <h2 className="text-3xl font-extrabold text-blue-700 font-sans animate-slide-in">{product.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">{'★'.repeat(Math.round(product.rating))}</span>
            <span className="text-gray-500">({product.rating})</span>
          </div>
          <p className="text-gray-600 text-lg animate-fade-in">{product.description}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${product.availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {product.availability ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 w-full text-lg font-bold"
            disabled={!product.availability}
            onClick={() => alert('Added to cart! (Demo)')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 