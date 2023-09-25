"use client"

import { routesArray } from "@/constants/routes";
import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  // hooks
  const pathname = usePathname()

  //functions
  function setBgColor(){
    return routesArray.findIndex(el => el.routePath === pathname)
  }

  // effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])


  // render
  return (
    <AnimatePresence>
      <m.main 
        initial={{ y: '-100%', opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: '100%', opacity: 0 }} 
        transition={{ duration: 0.3, ease: 'easeOut',bounce:0,delay:0.4}} 
        className={`flex min-h-screen flex-col items-center justify-between px-6 py-16 md:px-10 lg:px-16 ${bgColors[setBgColor()]} bg-opacity-70 overflow-clip scroll-smooth snap-y snap-mandatory`}>
          {children}
      </m.main>
    </AnimatePresence>
  )
}

const bgColors:readonly string[]  = ["bg-stone-50 dark:bg-stone-950","bg-sky-50 dark:bg-slate-950","bg-orange-50 dark:bg-stone-900","bg-indigo-50 dark:bg-gray-900","bg-emerald-50 dark:bg-zinc-950"] as const