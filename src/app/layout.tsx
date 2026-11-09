import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Header from "../components/Header"
import "../styles/globals.css"

import { Instrument_Serif } from "next/font/google"

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
})

// lalu di <body> tambahkan variable-nya, contoh:
// <body className={`${serif.variable} ...class-lain-kamu`}>

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Digitaliz - Landing Page Concept",
  description: "Solusi digital berbasis web untuk Banua",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-background text-text-primary transition-colors duration-300`}>
        {/* Panggil Header di sini agar muncul di seluruh halaman */}
        <Header />
        
        <main>{children}</main>
      </body>
    </html>
  )
}