import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-fade-in-up">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center font-sans animate-slide-in">Login</h1>
        {error && <div className="mb-4 text-red-500 animate-pulse">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-bold"
        >
          Login
        </button>
        <div className="mt-4 text-center text-gray-500">
          Don&apos;t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </div>
        <button
          type="button"
          className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-lg shadow hover:from-gray-400 hover:to-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-bold"
          onClick={() => navigate('/shop')}
          aria-label="Continue as Guest"
        >
          Continue as Guest
        </button>
      </form>
    </div>
  );
} 