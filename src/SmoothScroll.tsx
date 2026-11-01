import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { OverlayScrollbars } from 'overlayscrollbars'
import 'overlayscrollbars/overlayscrollbars.css'

export default function SmoothScroll() {
  useEffect(() => {
    const scrollbars = OverlayScrollbars(document.body, {
      scrollbars: { theme: 'os-theme-dark', autoHide: 'scroll' },
    })
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis: Lenis | undefined

    const updateMotion = () => {
      lenis?.destroy()
      lenis = undefined
      if (!reducedMotion.matches) {
        lenis = new Lenis({ duration: 1, smoothWheel: true, anchors: true, autoRaf: true })
      }
    }

    updateMotion()
    reducedMotion.addEventListener('change', updateMotion)
    return () => {
      reducedMotion.removeEventListener('change', updateMotion)
      lenis?.destroy()
      scrollbars.destroy()
    }
  }, [])

  return null
}
