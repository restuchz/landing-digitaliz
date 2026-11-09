// src/app/actions.ts
"use server"

import { db } from "../db"
import { comments } from "../db/schema"
import { eq, and } from "drizzle-orm"
import { revalidatePath } from "next/cache"

// Create Komentar
export async function addComment(formData: FormData) {
  const name = formData.get("name") as string
  const content = formData.get("content") as string
  const userToken = formData.get("userToken") as string

  if (!name || !content) return

  await db.insert(comments).values({
    name,
    content,
    userToken: userToken || null,
  })

  revalidatePath("/")
}

// Update Komentar (Hanya jika ID & User Token cocok)
export async function updateComment(id: number, content: string, userToken: string) {
  if (!content) return { success: false, message: "Komentar tidak boleh kosong" }

  const existing = await db
    .select()
    .from(comments)
    .where(and(eq(comments.id, id), eq(comments.userToken, userToken)))

  if (existing.length === 0) {
    return { success: false, message: "Akses ditolak: Anda bukan pemilik komentar ini." }
  }

  await db.update(comments).set({ content }).where(eq(comments.id, id))
  revalidatePath("/")
  return { success: true }
}

// Delete Komentar (Hanya jika ID & User Token cocok)
export async function deleteComment(id: number, userToken: string) {
  const existing = await db
    .select()
    .from(comments)
    .where(and(eq(comments.id, id), eq(comments.userToken, userToken)))

  if (existing.length === 0) {
    return { success: false, message: "Akses ditolak: Anda bukan pemilik komentar ini." }
  }

  await db.delete(comments).where(eq(comments.id, id))
  revalidatePath("/")
  return { success: true }
}