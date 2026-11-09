// src/app/page.tsx
import Hero from "./hero"
import Services from "./services"
import Process from "./process"
import Tech from "./tech"
import Comments from "./comments"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary transition-colors duration-300">
      <Hero />
      <Services />
      <Process />
      <Tech />
      <Comments />
      <footer className="border-t border-text-secondary/10 px-6 py-10 text-center text-sm text-text-secondary">
        <p>© 2026 Muhammad Restu Rahman. Built with Next.js & Tailwind CSS.</p>
        <p className="mt-2 text-xs">Landing page konsep untuk tugas seleksi magang, bukan situs resmi Digitaliz.</p>
      </footer>
    </main>
  )
}
