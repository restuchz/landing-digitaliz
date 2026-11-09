// src/app/process.tsx
"use client"

import FadeUp from "../components/animations/FadeUp"

const steps = [
  {
    number: "01",
    title: "Analisis Kebutuhan",
    description: "Memahami tujuan, pengguna, dan fitur utama sebelum mulai membangun.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),

  },
  {
    number: "02",
    title: "Desain & Pengembangan",
    description: "Merancang antarmuka, lalu membangun frontend, backend, dan database secara bertahap.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),

  },
  {
    number: "03",
    title: "Uji & Rilis",
    description: "Menguji fitur di berbagai perangkat, memperbaiki bug, lalu merilis dan mendokumentasikan.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  
  },
]

export default function Process() {
  return (
    <section id="proses" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28">
      <FadeUp>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight">
            Proses Kerja.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Alur kerja yang terstruktur untuk memastikan proyek berjalan tepat waktu dan hasil yang bagus.
          </p>
        </div>

        {/* Timeline Grid 3-Step Interaktif */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Garis Penghubung Alur (Hanya Tampil di Desktop/Tablet) */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-linear-to-r from-text-secondary/10 via-text-primary/40 to-text-secondary/10 -translate-y-8 z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative z-10 flex flex-col justify-between p-8 rounded-2xl border border-text-secondary/20 bg-background/90 backdrop-blur-md shadow-sm hover:border-text-primary/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Atas: Nomor Langkah & Ikon Interaktif */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-thirdary text-text-primary border border-text-secondary/10 group-hover:scale-110 group-hover:bg-text-primary group-hover:text-background transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Nomor Langkah Besar dengan Efek Glowing halus saat Hover */}
                  <span className="text-4xl font-black text-text-secondary/30 group-hover:text-text-primary transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

  

                {/* Judul & Deskripsi */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Panah Indikator Progres di Bagian Bawah Card */}
              <div className="mt-8 pt-4 border-t border-text-secondary/10 flex items-center justify-between text-xs font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                <span>Langkah {idx + 1} dari 3</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">

                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}