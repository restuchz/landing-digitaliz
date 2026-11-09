// src/components/CommentItem.tsx
"use client"
import { useEffect, useState } from "react"
import { updateComment, deleteComment } from "../app/actions"
import { getOrCreateUserToken } from "../lib/userToken"

interface CommentProps {
  comment: {
    id: number
    name: string
    content: string
    userToken: string | null
    createdAt: Date
  }
}

export default function CommentItem({ comment }: CommentProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(comment.content)
  const [currentUserToken, setCurrentUserToken] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  useEffect(() => {
    setCurrentUserToken(getOrCreateUserToken())
  }, [])

  // Tombol Edit & Hapus HANYA AKTIF jika userToken cocok
  const isOwner = comment.userToken && comment.userToken === currentUserToken

  const handleUpdate = async () => {
    const res = await updateComment(comment.id, editContent, currentUserToken)
    if (res?.success) {
      setIsEditing(false)
    } else if (res?.message) {
      alert(res.message)
    }
  }

  const handleDelete = async () => {
    const res = await deleteComment(comment.id, currentUserToken)
    if (res?.success) {
      setShowDeleteModal(false)
    } else if (res?.message) {
      alert(res.message)
    }
  }

  return (
    <div className="p-5 rounded-2xl border border-text-secondary/15 bg-background/60 shadow-sm flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-text-primary">{comment.name}</h4>
          <span className="text-xs text-text-secondary">
            {new Date(comment.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Tombol Aksi HANYA tampil jika merupakan pemilik komentar */}
        {isOwner && !isEditing && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-text-secondary/20 hover:border-text-primary text-text-primary cursor-pointer transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 cursor-pointer transition-colors"
            >
              Hapus
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-3 mt-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-3 rounded-xl border border-text-secondary/20 bg-background text-text-primary focus:outline-none"
            rows={3}
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="text-xs font-semibold px-4 py-2 rounded-lg border border-text-secondary/20 text-text-secondary hover:text-text-primary cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={handleUpdate}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-text-primary text-background cursor-pointer"
            >
              Simpan
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-text-secondary leading-relaxed">{comment.content}</p>
      )}

      {/* Custom Modal Delete Konfirmasi */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl border border-text-secondary/20 bg-background p-6 shadow-2xl flex flex-col gap-4">
            <h3 className="text-lg font-bold text-text-primary">Hapus Komentar?</h3>
            <p className="text-sm text-text-secondary">
              Apakah Anda yakin ingin menghapus komentar ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded-xl border border-text-secondary/20 text-sm font-semibold text-text-secondary hover:text-text-primary cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 cursor-pointer"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}