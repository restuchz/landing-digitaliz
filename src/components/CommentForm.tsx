// src/components/CommentForm.tsx
"use client"
import { useEffect, useState } from "react"
import { addComment } from "../app/actions"
import { getOrCreateUserToken } from "../lib/userToken"

export default function CommentForm() {
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(getOrCreateUserToken())
  }, [])

  return (
    <form action={addComment} className="flex flex-col gap-4 p-6 rounded-2xl border border-text-secondary/20 bg-background shadow-md">
      {/* Hidden input untuk mengirim userToken saat submit */}
      <input type="hidden" name="userToken" value={token} />

      <h3 className="text-xl font-bold text-text-primary">Tinggalkan Komentar</h3>
      
      <input
        type="text"
        name="name"
        placeholder="Nama Anda"
        required
        className="px-4 py-3 rounded-xl border border-text-secondary/20 bg-background text-text-primary focus:outline-none focus:border-text-primary"
      />

      <textarea
        name="content"
        rows={4}
        placeholder="Tulis masukan atau pesan Anda..."
        required
        className="px-4 py-3 rounded-xl border border-text-secondary/20 bg-background text-text-primary focus:outline-none focus:border-text-primary resize-none"
      />

      <button
        type="submit"
        className="cursor-pointer font-bold bg-text-primary text-background py-3.5 px-6 rounded-xl hover:opacity-90 transition-opacity"
      >
        Kirim Komentar
      </button>
    </form>
  )
}