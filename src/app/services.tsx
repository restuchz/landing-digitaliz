// src/app/services.tsx
const services = [
  { title: "Web Development", desc: "Pengembangan aplikasi web yang rapi, cepat, dan mudah dirawat." },
  { title: "UI/UX Design", desc: "Rancangan antarmuka yang konsisten dan nyaman digunakan, dari wireframe sampai prototipe." },
  { title: "Sistem Informasi", desc: "Aplikasi internal untuk mendukung pencatatan, pelaporan, dan pengelolaan data." },
  { title: "IT Support", desc: "Dukungan teknis dan pemeliharaan agar aplikasi tetap berjalan lancar." },
]

export default function Services() {
  return (
    <section id="layanan" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <div>
        <span className="text-xs uppercase tracking-widest font-bold text-text-secondary">What We Do</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tighter text-text-primary">Layanan</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={s.title}>
            <div className="group relative h-full rounded-xl border border-text-secondary/20 bg-background p-6 md:p-8 shadow-sm hover:border-text-primary/50 hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-background border border-text-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-black tracking-tight text-text-primary">{s.title}</h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-text-secondary">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}