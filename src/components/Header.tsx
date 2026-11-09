// src/components/Header.tsx
"use client"
import { useEffect, useState } from "react"

const links = [
  { name: "Home", id: "home" },
  { name: "Layanan", id: "layanan" },
  { name: "Proses", id: "proses" },
  { name: "Teknologi", id: "teknologi" },
  { name: "Komentar", id: "komentar" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    } catch {}
  }

  useEffect(() => {
    const onScroll = () => {
      let current = "home"
      document.querySelectorAll("section[id]").forEach((s) => {
        const el = s as HTMLElement
        if (window.scrollY >= el.offsetTop - el.clientHeight / 3) current = el.id
      })
      setActive(current)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none w-full">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div className="relative flex items-center justify-between py-3 md:py-4 px-6 md:px-8 bg-background/80 backdrop-blur-md border border-text-secondary/20 rounded-full shadow-lg transition-colors duration-300">
          <span className="text-xl md:text-2xl font-black text-text-primary tracking-tighter">DIGITALIZ.</span>

          <nav className="hidden lg:flex items-center md:gap-8 lg:gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className={`${
                  active === l.id ? "text-text-primary font-bold" : "text-text-secondary font-medium hover:text-text-primary"
                } cursor-pointer text-sm md:text-base tracking-wide transition-colors duration-200`}
              >
                {l.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Ganti tema"
              onClick={toggleTheme}
              className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors"
            >
              {/* Bulan: tampil saat dark */}
              <svg className="hidden dark:block w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
              </svg>
              {/* Matahari: tampil saat light */}
              <svg className="block dark:hidden w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              </svg>
            </button>

            <button aria-label="Menu" className="lg:hidden text-text-secondary" onClick={() => setOpen(!open)}>
              <svg className="w-6 md:w-7" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>

          <div className={`${open ? "scale-100 opacity-100" : "scale-0 opacity-0"} lg:hidden absolute top-16 right-4 z-50 origin-top-right transition-all duration-300`}>
            <div className="flex flex-col gap-6 bg-background/95 backdrop-blur-md border border-text-secondary/10 p-6 rounded-2xl shadow-xl w-48">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={`${active === l.id ? "text-text-primary font-bold" : "text-text-secondary font-medium"} text-left text-sm hover:text-text-primary transition-colors`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}