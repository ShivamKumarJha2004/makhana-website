'use client'

import { ReactNode } from 'react'
// import Lenis from '@studio-freight/lenis' // Disabled for instant scrolling

interface LenisProviderProps {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Lenis smooth scroll disabled for instant scrolling
  // Uncomment below code if you want smooth scroll back
  
  // useEffect(() => {
  //   if (window.innerWidth < 1024) return
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smoothWheel: true,
  //     wheelMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //   })
  //   let rafId: number
  //   const raf = (time: number) => {
  //     lenis.raf(time)
  //     rafId = requestAnimationFrame(raf)
  //   }
  //   rafId = requestAnimationFrame(raf)
  //   return () => {
  //     cancelAnimationFrame(rafId)
  //     lenis.destroy()
  //   }
  // }, [])

  return <>{children}</>
}
