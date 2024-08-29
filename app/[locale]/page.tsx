"use client"

import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"


export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      
      <img src="/images/H&K_Logo_45mm_weiß.svg" alt="Logo" width="150" height="auto" />


      <Link
        className="mt-8 flex w-[200px] items-center justify-center rounded-md btn-primary p-2 font-bold hover:btn-hover"
        href="/login"
      >
        Chat starten
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
