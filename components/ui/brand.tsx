"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"
import Image from "next/image"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    
    <div className="flex cursor-pointer flex-col items-center hover:opacity-50">
    <div className="mb-2">
      <Image src="/images/H&K_Logo_weiß-01.png" alt="Logo" width={60} height={60} />
    </div>

    <div className="text-4xl font-bold tracking-wide text-center">Hein & Kollegen Chatbot</div>
  </div>
   
  )
}
