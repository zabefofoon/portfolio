type GearProps = {
  teeth: number
  className: string
}

function Gear({ teeth, className }: GearProps) {
  return (
    <picture className={`absolute aspect-square ${className}`}>
      <source
        media="(prefers-reduced-motion: reduce)"
        srcSet={`/resources/images/gear-${teeth}.png`}
      />
      <img
        src={`/resources/images/gear-${teeth}.webp`}
        alt=""
        className="h-full w-full"
      />
    </picture>
  )
}

export default function GearBackground({ variant = 'hero' }: { variant?: 'hero' | 'contact' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${variant === 'contact' ? 'opacity-60' : ''}`}>
      <Gear teeth={16} className={variant === 'hero' ? 'top-[5%] left-[-13%] h-[clamp(100px,36vw,180px)] sm:top-[12%] sm:left-[-5%] sm:h-[43%]' : 'top-[8%] left-[-3%] h-[46%]'} />
      <Gear teeth={12} className={variant === 'hero' ? 'top-[68%] left-[-3%] h-[clamp(70px,22vw,110px)] sm:top-[58%] sm:left-[7%] sm:h-[25%]' : 'top-[50%] left-[10%] h-[30%]'} />
      <Gear teeth={18} className={variant === 'hero' ? 'top-[8%] right-[-16%] h-[clamp(120px,42vw,210px)] sm:top-[3%] sm:right-[-2%] sm:h-[56%]' : 'top-[5%] right-[-4%] h-[56%]'} />
      <Gear teeth={11} className={variant === 'hero' ? 'top-[79%] right-[-6%] h-[clamp(75px,25vw,125px)] sm:top-[48%] sm:right-[8%] sm:h-[31%]' : 'top-[54%] right-[11%] h-[27%]'} />
      <div className={variant === 'contact'
        ? 'absolute inset-0 bg-[radial-gradient(ellipse_40%_70%_at_50%_50%,white,transparent)]'
        : 'absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_50%_50%,rgba(232,243,255,0.98)_25%,rgba(232,243,255,0.88)_55%,transparent_100%)]'} />
    </div>
  )
}
