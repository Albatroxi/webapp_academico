import "../globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portal do Coordenador",
  description: "Dashboard do Portal do Coordenador",
}

export default function CoordinatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#f0f4f8]`}>{children}</body>
    </html>
  )
}

