import { db } from "../../../db"
import { comments } from "../../../db/schema"
import { desc } from "drizzle-orm"
import { NextResponse } from "next/server"

// Menonaktifkan cache serverless agar selalu mengambil data paling segar dari Neon DB
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const data = await db.select().from(comments).orderBy(desc(comments.createdAt))
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 })
  }
}