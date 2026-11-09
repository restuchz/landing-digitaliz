// src/components/RealtimeComments.tsx
"use client"
import { useEffect, useState } from "react"
import CommentItem from "./CommentItem"

interface CommentData {
  id: number
  name: string
  content: string
  userToken: string | null
  createdAt: Date
}

export default function RealtimeComments({ initialComments }: { initialComments: CommentData[] }) {
  const [commentList, setCommentList] = useState<CommentData[]>(initialComments)

  useEffect(() => {
    const fetchLatestComments = async () => {
      try {
        const res = await fetch("/api/comments")
        if (res.ok) {
          const data = await res.json()
          setCommentList(data)
        }
      } catch (err) {
        console.error("Polling error:", err)
      }
    }

    const interval = setInterval(fetchLatestComments, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">
        {commentList.length} komentar
      </p>

      {commentList.length === 0 ? (
        <p className="rounded-xl border border-dashed border-text-secondary/30 p-8 text-center text-sm text-text-secondary">
          Belum ada komentar. Jadilah yang pertama!
        </p>
      ) : (
        <div className="space-y-4">
          {commentList.map((c) => (
            <CommentItem
              key={c.id}
              comment={{
                id: c.id,
                name: c.name,
                content: c.content,
                userToken: c.userToken,
                createdAt: new Date(c.createdAt),
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}