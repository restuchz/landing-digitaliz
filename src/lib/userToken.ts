// src/lib/userToken.ts
export function getOrCreateUserToken(): string {
  if (typeof window === "undefined") return ""
  let token = localStorage.getItem("digitaliz_user_token")
  if (!token) {
    token = crypto.randomUUID()
    localStorage.setItem("digitaliz_user_token", token)
  }
  return token
}