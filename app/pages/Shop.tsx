import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

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

const categories = ["All", "Electronics", "Wearables", "Footwear", "Accessories"];
const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
];

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [filtered, setFiltered] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/app/data/products.json")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  useEffect(() => {
    let result = [...products];
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }
    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    setFiltered(result);
  }, [products, search, category, sort]);

  const handleAddToCart = (id: number) => {
    // TODO: Implement cart logic
    alert("Added to cart! (Demo)");
  };

  return (
    <div className="pt-24 pb-8 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center font-sans tracking-tight text-blue-700 animate-slide-in">Shop Products</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/3 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 glass shadow focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all text-lg placeholder-gray-400 dark:placeholder-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 glass shadow focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all text-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            className="px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 glass shadow focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all text-lg"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by</option>
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg animate-pulse">No products found.</div>
          ) : (
            filtered.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Animations (add to app.css or global styles):
// .animate-fade-in { animation: fadeIn 1s ease; }
// .animate-slide-in { animation: slideIn 0.7s cubic-bezier(.4,2,.6,1); }
// .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(.4,2,.6,1); }
// .animate-pulse { animation: pulse 2s infinite; } 