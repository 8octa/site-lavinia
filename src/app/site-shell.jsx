'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function SiteShell({ children }) {
  const shellRef = useRef(null)
  const pathname = usePathname()

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.view > section:first-child > *', {
          autoAlpha: 0,
          y: 18,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
        })
      })

      return () => media.revert()
    },
    { scope: shellRef, dependencies: [pathname], revertOnUpdate: true },
  )

  return (
    <div ref={shellRef}>
      {children}
    </div>
  )
}
