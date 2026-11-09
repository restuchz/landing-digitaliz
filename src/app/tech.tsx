// src/app/tech.tsx
"use client"

import { useState } from "react"
import FadeUp from "../components/animations/FadeUp"

// Daftar Tech Stack lengkap dengan Logo SVG Brand resmi
const techStacks = [
  {
    name: "Next.js",
    category: "Fullstack Framework",
    description: "Framework React untuk server-side rendering, Server Actions, dan performa tinggi.",
    icon: (
      <svg className="w-8 h-8 text-text-primary" viewBox="0 0 180 180" fill="currentColor">
        <path d="M152.127 160.015L74.8475 49.3333H60V130.667H73.3333V68.2133L142.36 166.707C145.853 164.653 149.12 162.413 152.127 160.015ZM90 0C40.2933 0 0 40.2933 0 90C0 139.707 40.2933 180 90 180C139.707 180 180 139.707 180 90C180 40.2933 139.707 0 90 0ZM120 130.667H106.667V49.3333H120V130.667Z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend Library",
    description: "Library UI berbasis komponen untuk membangun antarmuka interaktif.",
    icon: (
      <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
        <ellipse cx="50" cy="50" rx="42" ry="16" />
        <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
        <circle cx="50" cy="50" r="7" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "UI Styling",
    description: "Framework CSS utility-first untuk desain responsif dan kustomisasi tema.",
    icon: (
      <svg className="w-8 h-8 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    description: "Superset JavaScript berjenis ketat untuk kode yang aman dan bebas bug.",
    icon: (
      <svg className="w-8 h-8 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.864 12.65c.88 0 1.56.24 2.04.72.48.48.72 1.16.72 2.04v.16c0 1.48-.68 2.36-2.04 2.64v.08c1.6.24 2.4 1.24 2.4 3 0 1.08-.32 1.92-.96 2.52-.64.6-1.56.9-2.76.9-1.24 0-2.24-.32-3-.96-.76-.64-1.14-1.52-1.14-2.64h2.4c0 .48.14.86.42 1.14.28.28.7.42 1.26.42.56 0 .98-.14 1.26-.42.28-.28.42-.7.42-1.26 0-.6-.16-1.02-.48-1.26-.32-.24-.82-.36-1.5-.36h-.96v-1.92h.96c.64 0 1.12-.12 1.44-.36.32-.24.48-.62.48-1.14 0-.48-.14-.84-.42-1.08-.28-.24-.68-.36-1.2-.36-.52 0-.92.12-1.2.36-.28.24-.42.6-.42 1.08h-2.4c0-1.08.38-1.92 1.14-2.52.76-.6 1.76-.9 3-.9zm-8.8 3.68v8.4H7.64v-8.4H3.88v-2.08h9.84v2.08H10.19z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    description: "Prototyping, pembuatan sistem desain, dan perancangan tata letak web.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL (Neon)",
    category: "Serverless Database",
    description: "Database relasional performa tinggi berbasis cloud serverless dari Neon.",
    icon: (
      <svg className="w-8 h-8 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    ),
  },
  {
    name: "Drizzle ORM",
    category: "Database Tooling",
    description: "Object-Relational Mapper yang cepat dan ringan untuk manajemen skema SQL.",
    icon: (
      <svg className="w-8 h-8 text-[#C5F74F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime Environment",
    description: "Eksekusi JavaScript di sisi server untuk mengelola alur Server Actions.",
    icon: (
      <svg className="w-8 h-8 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.31l7.64 4.2-7.64 4.2-7.64-4.2L12 4.31zM4 9.47l7 3.85v7.71l-7-3.85V9.47zm16 7.71l-7 3.85v-7.71l7-3.85v7.71z" />
      </svg>
    ),
  },
]

export default function Tech() {
  const [currentPage, setCurrentPage] = useState(0)

  // Setiap slide menampilkan 4 card (Grid 2x2)
  const itemsPerPage = 4
  const totalPages = Math.ceil(techStacks.length / itemsPerPage)

  const currentItems = techStacks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="teknologi" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28">
      <FadeUp>
        {/* Header Section & Tombol Navigasi Slider */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
              Teknologi Utama
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight mt-2">
              Tech Stack & Tools.
            </h2>
          </div>

          {/* Kontrol Navigasi Slider */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevPage}
              aria-label="Previous Slide"
              className="cursor-pointer p-3 rounded-xl border border-text-secondary/20 bg-background text-text-primary hover:border-text-primary hover:bg-thirdary transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-sm font-bold text-text-secondary px-2 select-none">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              aria-label="Next Slide"
              className="cursor-pointer p-3 rounded-xl border border-text-secondary/20 bg-background text-text-primary hover:border-text-primary hover:bg-thirdary transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Layout Grid 2x2 (Kotak-Kotak Sesuai Request) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[360px]">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-text-secondary/20 bg-background/80 backdrop-blur-md shadow-sm hover:border-text-primary/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Card: Logo & Kategori */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-thirdary border border-text-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-thirdary text-text-secondary border border-text-secondary/10">
                    {item.category}
                  </span>
                </div>

                {/* Nama Brand */}
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-colors">
                  {item.name}
                </h3>

                {/* Deskripsi Singkat */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator di bagian bawah */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === i ? "w-8 bg-text-primary" : "w-2 bg-text-secondary/30 hover:bg-text-secondary/60"
              }`}
            />
          ))}
        </div>
      </FadeUp>
    </section>
  )
}