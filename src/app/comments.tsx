// src/app/comments.tsx
import { desc } from "drizzle-orm"
import { db } from "../db"
import { comments } from "../db/schema"
import CommentForm from "../components/CommentForm"
import CommentItem from "../components/CommentItem"
import FadeUp from "../components/animations/FadeUp"

const fmt = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Makassar",
})

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
        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">{rows.length} komentar</p>

        {rows.length === 0 && (
          <p className="rounded-xl border border-dashed border-text-secondary/30 p-8 text-center text-sm text-text-secondary">
            Belum ada komentar. Jadilah yang pertama!
          </p>
        )}

        {rows.map((c) => (
          <CommentItem
            key={c.id}
            id={c.id}
            name={c.name}
            message={c.message}
            createdAt={fmt.format(c.createdAt)}
            edited={c.updatedAt.getTime() - c.createdAt.getTime() > 1000}
          />
        ))}
      </div>
    </section>
  )
}