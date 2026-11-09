"use client"
import { useEffect, useState } from "react"
import type { PropsWithChildren } from "react"

const TEXTS = ["Web Development", "UI/UX Design", "IT Support"]

function FadeUp({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <div
      style={{
        animation: "fade-up 0.7s ease-out both",
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

  // Memastikan komponen sudah mounted penuh di browser HP/Laptop
  useEffect(() => {
    setMounted(true)
  }, [])

  // Logika efek ketik yang aman untuk Network & Mobile
  useEffect(() => {
    if (!mounted) return

    const current = TEXTS[index]
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((prev) => prev + 1)
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1)
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200)
        } else if (deleting && subIndex === 0) {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % TEXTS.length)
        }
      },
      deleting ? 60 : 120,
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, mounted])

  return (
    <section id="home" className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center px-6 md:px-12 py-28 md:py-36 overflow-hidden">
      <FadeUp>
        <div className="flex flex-col gap-2">
          <h1 className="text-text-primary text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-tight">
            Solusi digital
            <span className="text-transparent bg-clip-text bg-linear-to-r from-text-primary to-text-secondary"> untuk Banua</span>
          </h1>

          {/* Area Typing Effect */}
          <div className="relative h-10 flex items-center">
            <span className="text-text-primary text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight min-h-[36px]">
              {mounted ? TEXTS[index].substring(0, subIndex) : TEXTS[0]}
            </span>
            <span className="animate-cursor text-text-secondary text-2xl lg:text-3xl font-light ml-1">|</span>
          </div>

          <div className="max-w-xl mt-4">
            <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed font-medium">
              Digitaliz adalah unit pengembangan software berbasis web di bawah Yayasan Hasnur Centre.
            </p>
            <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed font-medium">
              Halaman ini adalah landing page konsep untuk tugas teknis seleksi magang.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => goTo("layanan")}
              className="cursor-pointer text-sm md:text-base font-bold bg-text-primary text-background px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] transition-all duration-300 ease-out"
            >
              Lihat Layanan
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
            <button
              onClick={() => goTo("komentar")}
              className="cursor-pointer text-sm md:text-base font-bold border-2 border-text-secondary/20 hover:border-text-primary text-text-primary px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-thirdary/40 transition-all duration-300 ease-out bg-background/50 backdrop-blur-sm"
            >
              Tulis Komentar
            </button>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.15}>
        <div className="relative flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute inset-0 bg-linear-to-tr from-thirdary to-background rounded-full scale-110 opacity-50 blur-2xl" />
          <div className="floating relative z-10 w-full max-w-md rounded-2xl border border-text-secondary/20 bg-background shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-text-secondary/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-text-secondary/30" />
              <span className="h-3 w-3 rounded-full bg-text-secondary/30" />
              <span className="h-3 w-3 rounded-full bg-text-secondary/30" />
              <span className="ml-3 h-5 flex-1 rounded-md bg-thirdary" />
            </div>
            <div className="space-y-3 p-6">
              <div className="h-4 w-2/3 rounded bg-text-primary/80" />
              <div className="h-3 w-full rounded bg-thirdary" />
              <div className="h-3 w-5/6 rounded bg-thirdary" />
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="h-20 rounded-xl bg-thirdary" />
                <div className="h-20 rounded-xl bg-thirdary" />
                <div className="h-20 rounded-xl bg-thirdary" />
              </div>
              <div className="h-10 w-1/3 rounded-xl bg-text-primary" />
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}