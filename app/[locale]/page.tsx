"use client"

import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"


export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      
      <img src="/images/H&K_Logo_45mm_weiß.svg" alt="Logo" width="150" height="auto" />

      <div className="mt-4 text-4xl font-bold">Chatbot von Hein & Kollegen</div>

      <Link
        className="mt-4 w-auto px-8 py-2 rounded-md bg-blue-950 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-950 items-center justify-center"
        href="/login"
      >
        Chat starten
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
