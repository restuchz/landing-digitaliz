// src/app/actions.ts
"use server"

import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"
import { db } from "../db"
import { comments } from "../db/schema"

type ActionState = { error?: string; success?: boolean }

function validate(name: string, message: string): string | null {
  if (!name.trim()) return "Nama wajib diisi"
  if (name.trim().length > 50) return "Nama maksimal 50 karakter"
  if (!message.trim()) return "Komentar wajib diisi"
  if (message.trim().length > 500) return "Komentar maksimal 500 karakter"
  return null
}

// CREATE
export async function addComment(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const name = String(formData.get("name") ?? "")
  const message = String(formData.get("message") ?? "")

  const error = validate(name, message)
  if (error) return { error }

  await db.insert(comments).values({ name: name.trim(), message: message.trim() })
  revalidatePath("/")
  return { success: true }
}

// UPDATE
export async function updateComment(id: number, message: string): Promise<ActionState> {
  if (!message.trim()) return { error: "Komentar wajib diisi" }
  if (message.trim().length > 500) return { error: "Komentar maksimal 500 karakter" }

  await db.update(comments).set({ message: message.trim(), updatedAt: new Date() }).where(eq(comments.id, id))
  revalidatePath("/")
  return { success: true }
}

// DELETE
export async function deleteComment(id: number) {
  await db.delete(comments).where(eq(comments.id, id))
  revalidatePath("/")
}