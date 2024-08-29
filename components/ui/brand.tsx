"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    
    <div className="flex cursor-pointer flex-col items-center hover:opacity-90">
    <div className="mb-2">
          <img src="/images/H&K_Logo_45mm_weiß.svg" alt="Logo" width="150" height="auto" />
    </div>
    {/* <div className="text-2xl font-bold tracking-wide text-center">Hein & Kollegen Chatbot</div> */}
  </div>
   
  )
}
