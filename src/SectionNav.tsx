import {
  ArrowUp,
  BriefcaseBusiness,
  FolderHeart,
  Mail,
  UserRound,
  Workflow,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: '소개', icon: UserRound },
  { id: 'experience', label: '이력', icon: Workflow },
  { id: 'work-projects', label: '회사', icon: BriefcaseBusiness },
  { id: 'side-projects', label: '개인', icon: FolderHeart },
  { id: 'contact', label: '연락', icon: Mail },
]

const glassStyle =
  'border border-white/70 bg-white/62 shadow-[0_8px_30px_rgba(55,91,141,0.18),inset_0_1px_rgba(255,255,255,0.8)] backdrop-blur-[18px] backdrop-saturate-150'

const focusStyle =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'

export default function SectionNav() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const threshold = window.innerHeight * 0.35
      let current = sections[0].id
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= threshold)
          current = section.id
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].id
      }
      setActive(current)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    update()
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <nav
        aria-label="페이지 섹션"
        className="fixed bottom-[max(24px,env(safe-area-inset-bottom))] left-1/2 z-20 max-w-[calc(100%-24px)] -translate-x-1/2"
      >
        <ul
          className={`m-0 flex list-none gap-1 rounded-full p-1.5 ${glassStyle}`}
        >
          {sections.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={id === 'about' ? '#top' : `#${id}`}
                className={`flex min-h-10 min-w-12 items-center justify-center rounded-full px-[clamp(10px,2vw,18px)] py-[9px] text-sm font-semibold whitespace-nowrap transition-[color,background-color,box-shadow] duration-150 ${focusStyle} ${active === id ? 'bg-blue-100/90 text-blue-700 shadow-[0_2px_8px_rgba(59,130,246,0.15),inset_0_1px_rgba(255,255,255,0.8)]' : 'text-[#53657e] hover:bg-white/55 hover:text-blue-600'}`}
                aria-label={label}
                aria-current={active === id ? 'location' : undefined}
              >
                {active === id ? label : <Icon size={19} aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#top"
        className={`fixed right-[max(24px,env(safe-area-inset-left))] bottom-[max(24px,env(safe-area-inset-bottom))] z-20 hidden size-[52px] place-items-center rounded-full text-[#53657e] hover:bg-white/80 hover:text-blue-600 sm:grid ${glassStyle} ${focusStyle}`}
        aria-label="페이지 맨 위로 이동"
      >
        <ArrowUp size={19} aria-hidden="true" />
      </a>
    </>
  )
}
