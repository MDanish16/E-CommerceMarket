import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className={`ml-4 flex items-center px-3 py-2 rounded-full transition bg-gray-200 dark:bg-gray-700 shadow hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none`}
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      tabIndex={0}
    >
      <span className="mr-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
        {dark ? "Dark" : "Light"}
      </span>
      <span className="w-8 h-8 flex items-center justify-center">
        {dark ? (
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
        ) : (
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.47a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zM18 9a1 1 0 100 2h-2a1 1 0 100-2h2zm-2.47 4.22a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zM10 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-4.22-2.47a1 1 0 00-1.42 1.42l1.42 1.42a1 1 0 001.42-1.42l-1.42-1.42zM4 11a1 1 0 100-2H2a1 1 0 100 2h2zm2.47-4.22a1 1 0 00-1.42-1.42L3.63 6.2a1 1 0 001.42 1.42l1.42-1.42z" /></svg>
        )}
      </span>
    </button>
  );
} 