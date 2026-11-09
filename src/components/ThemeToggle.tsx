// src/components/ThemeToggle.tsx
"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Cek tema saat komponen dimuat pertama kali di browser
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  function toggleTheme() {
    const nextDark = !isDark
    setIsDark(nextDark)

    if (nextDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative flex h-9 w-16 items-center rounded-full bg-thirdary p-1 border border-text-secondary/20 transition-colors duration-300 focus:outline-none"
    >
      {/* Icon Matahari & Bulan di Latar Belakang */}
      <span className="absolute left-2 text-xs select-none">☀️</span>
      <span className="absolute right-2 text-xs select-none">🌙</span>

      {/* Bulatan Sakelar yang Bergerak */}
      <span
        className={`z-10 h-7 w-7 rounded-full bg-text-primary shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  )
}