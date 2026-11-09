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

const serifStyle = { fontFamily: "var(--font-serif), Georgia, 'Times New Roman', serif" }

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

  useEffect(() => {
    setMounted(true)
  }, [])

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
    <section
      id="home"
      className="relative w-full min-h-svh overflow-hidden flex items-center justify-center px-6 pt-24 pb-12 md:pt-28 md:pb-16 bg-linear-to-b from-background via-thirdary to-background"
    >
      {/* Lapisan gradient: cahaya lembut dari bawah */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-[ellipse_80%_55%_at_50%_100%] from-text-secondary/25 via-text-secondary/5 to-transparent to-75%"
      />
      {/* Lapisan gradient: sorotan halus dari atas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-[ellipse_60%_40%_at_50%_0%] from-text-primary/5 to-transparent"
      />
            {/* Fade bawah: menyatu ke section berikutnya */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56 bg-linear-to-b from-transparent to-background"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <FadeUp>
          <h1 className="text-text-primary text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[1.02]">
            Solusi digital
            <br />
            <span className="italic font-normal pr-3" style={serifStyle}>
              untuk
            </span>
            Banua
          </h1>
        </FadeUp>

        {/* Typing effect: teks polos, tanpa border/pill */}
        <FadeUp delay={0.1}>
          <div className="mt-4 md:mt-5 flex items-center justify-center h-9">
            <span className="text-text-secondary text-xl md:text-2xl font-medium tracking-tight">
              {mounted ? TEXTS[index].substring(0, subIndex) : TEXTS[0]}
            </span>
            <span className="animate-cursor text-text-secondary text-2xl font-light ml-0.5">|</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="max-w-2xl mt-5 md:mt-6 space-y-2">
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium">
              Digitaliz adalah unit pengembangan software berbasis web di bawah Yayasan Hasnur Centre.
            </p>
            <p className="text-text-secondary/70 text-sm md:text-base leading-relaxed">
              Halaman ini adalah landing page konsep untuk tugas teknis seleksi magang.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="relative mt-7 md:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Panah melengkung dekoratif */}
            <svg
              aria-hidden
              className="pointer-events-none absolute -left-24 top-8 hidden lg:block h-16 w-24 text-text-secondary/60"
              viewBox="0 0 100 60"
              fill="none"
            >
              <path
                d="M2 58 C 20 10, 60 5, 95 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M84 6 L96 14 L86 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <button
              onClick={() => goTo("layanan")}
              className="group cursor-pointer flex items-center gap-4 rounded-full bg-text-primary text-background pl-8 pr-2 py-2 text-base font-semibold hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              Lihat Layanan
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-text-primary transition-transform duration-300 group-hover:rotate-45">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 17 17 7M9 7h8v8"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={() => goTo("komentar")}
              className="group cursor-pointer flex items-center gap-2 text-base font-semibold text-text-primary hover:text-text-secondary transition-colors"
            >
              Tulis Komentar
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 17 17 7M9 7h8v8"
                />
              </svg>
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}