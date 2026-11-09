// src/components/CommentItem.tsx
"use client"
import { useState, useTransition } from "react"
import { deleteComment, updateComment } from "../app/actions"

type Props = { id: number; name: string; message: string; createdAt: string; edited: boolean }

const inputClass =
  "w-full rounded-xl border border-text-secondary/20 bg-thirdary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-text-primary"

export default function CommentItem({ id, name, message, createdAt, edited }: Props) {
  const [editing, setEditing] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [text, setText] = useState(message)
  const [error, setError] = useState("")
  const [pending, startTransition] = useTransition()

  function handleSave() {
    startTransition(async () => {
      const res = await updateComment(id, text)
      if (res?.error) {
        setError(res.error)
        return
      }
      setError("")
      setEditing(false)
    })
  }

  function confirmDelete() {
    startTransition(async () => {
      await deleteComment(id)
      setShowDeleteModal(false)
    })
  }

  return (
    <div className="relative rounded-xl border border-text-secondary/20 bg-background p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-text-primary/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text-primary text-background text-sm font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-text-primary leading-tight">{name}</p>
            <p className="text-xs text-text-secondary">
              {createdAt}
              {edited && " · diedit"}
            </p>
          </div>
        </div>

        {!editing && (
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
            <button onClick={() => setEditing(true)} className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors">
              Edit
            </button>
            <button onClick={() => setShowDeleteModal(true)} disabled={pending} className="cursor-pointer text-red-500 hover:opacity-70 transition-opacity disabled:opacity-50">
              Hapus
            </button>
          </div>
        )}
      </div>

      {editing ? (
        <div className="mt-4 space-y-3">
          <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={500} rows={3} className={inputClass} />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex gap-3 text-sm font-bold">
            <button
              onClick={handleSave}
              disabled={pending}
              className="cursor-pointer rounded-lg bg-text-primary text-background px-5 py-2 hover:-translate-y-0.5 transition-transform disabled:opacity-50"
            >
              {pending ? "Menyimpan..." : "Simpan"}
            </button>
            <button
              onClick={() => {
                setEditing(false)
                setText(message)
                setError("")
              }}
              className="cursor-pointer rounded-lg border-2 border-text-secondary/20 text-text-primary px-5 py-2 hover:border-text-primary transition-colors"
            >
              Batal
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-4 whitespace-pre-wrap text-sm text-text-secondary leading-relaxed">{message}</p>
      )}

      {/* Custom Modal Konfirmasi Hapus */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl border border-text-secondary/20 bg-background p-6 shadow-xl space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-text-primary">Hapus Komentar?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Tindakan ini akan menghapus komentar secara permanen dan tidak dapat dibatalkan.
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2 text-sm font-bold">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                disabled={pending}
                className="cursor-pointer rounded-lg border-2 border-text-secondary/20 text-text-primary px-4 py-2 hover:border-text-primary transition-colors disabled:opacity-50"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={pending}
                className="cursor-pointer rounded-lg bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {pending ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}