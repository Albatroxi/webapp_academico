import "../globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portal do Professor",
  description: "Dashboard do Portal do Professor",
}

export default function TeacherLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#f0f4f8]`}>{children}</body>
    </html>
  )
}

