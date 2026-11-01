import { useEffect, useRef } from 'react'

const teeth = 18
const outline = Array.from({ length: teeth * 4 }, (_, index) => {
  const angle = (index / (teeth * 4)) * Math.PI * 2 - Math.PI / 2
  const radius = index % 4 === 1 || index % 4 === 2 ? 96 : 82
  return `${100 + Math.cos(angle) * radius},${100 + Math.sin(angle) * radius}`
}).join(' ')

function Gear({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <polygon points={outline} />
      <circle cx="100" cy="100" r="72" />
      <circle cx="100" cy="100" r="25" />
      {Array.from({ length: 9 }, (_, index) => {
        const angle = (index / 9) * Math.PI * 2
        return (
          <line
            key={index}
            x1={100 + Math.cos(angle) * 25}
            y1={100 + Math.sin(angle) * 25}
            x2={100 + Math.cos(angle) * 72}
            y2={100 + Math.sin(angle) * 72}
          />
        )
      })}
    </svg>
  )
}

export default function ScrollGears() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      container.style.setProperty('--gear-rotation', `${reducedMotion.matches ? 0 : window.scrollY * 0.12}deg`)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    reducedMotion.addEventListener('change', update)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      reducedMotion.removeEventListener('change', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="sticky top-0 h-[min(100vh,100%)] supports-[height:100svh]:h-[min(100svh,100%)]">
        {['left', 'right'].map((side) => (
          <div key={side} className={`absolute top-[3%] bottom-[3%] flex flex-col justify-between ${side === 'left' ? 'right-full' : 'left-full'}`}>
            {Array.from({ length: 2 }, (_, index) => (
              <Gear key={index} className={`w-[clamp(75px,8vw,110px)] shrink-0 stroke-[#5689c9] stroke-[1.1] opacity-65 ${index % 2 ? 'transform-[rotate(calc(-1*var(--gear-rotation,0deg)))]' : 'transform-[rotate(var(--gear-rotation,0deg))]'}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
