import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(name, email);
    setEditing(false);
    setMessage("Profile updated!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-fade-in-up">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center font-sans animate-slide-in">User Profile</h1>
        {message && <div className="mb-4 text-green-600 animate-pulse">{message}</div>}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all shadow-sm"
            disabled={!editing}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all shadow-sm"
            disabled={!editing}
          />
          <div className="flex gap-2 mt-2">
            {editing ? (
              <>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all font-bold"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition-all font-bold"
                  onClick={() => { setEditing(false); setName(user.name); setEmail(user.email); }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all font-bold"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
        <button
          className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg shadow hover:from-blue-500 hover:to-pink-500 transition-all font-bold"
          onClick={() => { logout(); navigate("/login"); }}
        >
          Logout
        </button>
      </div>
    </div>
  );
} 