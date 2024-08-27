"use client"

import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"


export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      
      <img src="/images/H&K_Logo_45mm_weiß.svg" alt="Logo" width="150" height="auto" />

      <div className="mt-2 text-4xl font-bold">Chatbot von Hein & Kollegen</div>

      <Link
        className="hover:before:bg-redborder-slate-800 relative h-[50px] w-40 overflow-hidden border border-slate-800 bg-white px-3 text-grey-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full font-semibold"
        href="/login"
      >
        Chat starten
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
