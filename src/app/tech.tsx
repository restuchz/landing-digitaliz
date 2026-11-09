// src/app/tech.tsx
const techs = ["Next.js", "React", "Tailwind CSS", "Laravel", "PHP", "Node.js", "PostgreSQL", "MySQL", "Figma", "Git"]

export default function Tech() {
  const loop = [...techs, ...techs]
  return (
    <section id="teknologi" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 overflow-hidden">
      <div className="animate-fade-up">
        <span className="text-xs uppercase tracking-widest font-bold text-text-secondary">Stack</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tighter text-text-primary">Teknologi Web</h2>
        <p className="mt-4 max-w-xl text-text-secondary font-medium">Teknologi yang umum dipakai dalam pengembangan web modern.</p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="animate-infinite-scroll flex gap-4">
          {loop.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-xl border border-text-secondary/20 bg-thirdary px-6 py-3 text-sm font-bold uppercase tracking-wider text-text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}