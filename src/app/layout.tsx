// src/app/layout.tsx
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: { default: "Digitaliz | Landing Page", template: "%s | Digitaliz" },
  description: "Landing page konsep untuk tugas teknis seleksi magang dengan fitur komentar CRUD.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}