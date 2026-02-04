"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="mt-4 w-full rounded-md px-3 py-2 text-sm font-medium
                 bg-gray-200 text-gray-900 hover:bg-gray-300
                 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
                 transition"
    >
      {isDark ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
    </button>
  );
}
