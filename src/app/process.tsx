// src/app/process.tsx
const steps = [
  { no: "01", title: "Analisis Kebutuhan", desc: "Memahami tujuan, pengguna, dan fitur utama sebelum mulai membangun." },
  { no: "02", title: "Desain & Pengembangan", desc: "Merancang antarmuka, lalu membangun frontend, backend, dan database secara bertahap." },
  { no: "03", title: "Uji & Rilis", desc: "Menguji fitur di berbagai perangkat, memperbaiki bug, lalu merilis dan mendokumentasikan." },
]

export default function Process() {
  return (
    <section id="proses" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <div>
        <span className="text-xs uppercase tracking-widest font-bold text-text-secondary">How It Works</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tighter text-text-primary">Proses Kerja</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={s.no}>
            <div className="h-full rounded-xl border border-text-secondary/20 bg-thirdary/50 p-6 md:p-8">
              <span className="text-5xl font-black text-text-primary/20">{s.no}</span>
              <h3 className="mt-4 text-xl font-black tracking-tight text-text-primary">{s.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-text-secondary">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}