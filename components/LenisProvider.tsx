'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'

interface LenisProviderProps {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    
    if (window.innerWidth < 1024) return

    const lenis = new Lenis({
      duration: 0.1,       
      smoothWheel: true,
      wheelMultiplier: 1.3, 
      easing: (t: number) => t, 
    })

    let rafId: number

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
