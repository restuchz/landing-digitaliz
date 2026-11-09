// src/components/CommentForm.tsx
"use client"
import { useActionState } from "react"
import { addComment } from "../app/actions"

const inputClass =
  "w-full rounded-xl border border-text-secondary/20 bg-thirdary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors focus:border-text-primary"

export default function CommentForm() {
  const [state, formAction, pending] = useActionState<{ error?: string; success?: boolean }, FormData>(addComment, {})

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-text-secondary/20 bg-background p-6 md:p-8 shadow-sm">
      <input name="name" required maxLength={50} placeholder="Nama kamu" className={inputClass} />
      <textarea name="message" required maxLength={500} rows={3} placeholder="Tulis komentar..." className={inputClass} />
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer text-sm font-bold bg-text-primary text-background px-8 py-4 rounded-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
      > 
        {pending ? "Mengirim..." : "Kirim Komentar"}
      </button>
    </form>
  )
}