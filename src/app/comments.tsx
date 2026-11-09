// src/app/comments.tsx
import { desc } from "drizzle-orm"
import { db } from "../db"
import { comments } from "../db/schema"
import CommentForm from "../components/CommentForm"
import RealtimeComments from "../components/RealtimeComments"
import FadeUp from "../components/animations/FadeUp"

export default async function Comments() {
  const rows = await db.select().from(comments).orderBy(desc(comments.createdAt))

  return (
    <section id="komentar" className="w-full max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <FadeUp>
        <span className="text-xs uppercase tracking-widest font-bold text-text-secondary">Feedback</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tighter text-text-primary">Komentar</h2>
        <p className="mt-4 text-text-secondary font-medium">Punya saran atau pendapat? Tulis di sini.</p>
      </FadeUp>

      <div className="mt-10">
        <CommentForm />
      </div>

      <div className="mt-10 space-y-4">
        {/* Menggantikan bagian {rows.length} dan {rows.map(...)} lama. */}
        {/* Data awal (rows) tetap dikirimkan ke RealtimeComments agar tampilan langsung muncul tanpa loading awal. */}
        <RealtimeComments initialComments={rows} />
      </div>
    </section>
  )
}