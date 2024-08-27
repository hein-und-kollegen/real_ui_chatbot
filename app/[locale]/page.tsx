"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from 'next/image';


export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      
      <Image src="/images/H&K_Logo_weiß-01.png" alt="Logo" width={500} height={500} />

      <div className="mt-2 text-4xl font-bold">Chatbot von Hein & Kollegen</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-slate-500 p-2 font-semibold"
        href="/login"
      >
        Chat starten
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
