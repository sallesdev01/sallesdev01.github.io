import { ArrowDown } from 'lucide-react'

type Props = {
  text: string
  href: string
  className?: string
}

// Selo circular com texto girando em volta
export function RotatingBadge({ text, href, className = '' }: Props) {
  const chars = `${text} ✦ `.repeat(2)
  return (
    <a
      href={href}
      aria-label="Rolar para os cases"
      className={`group relative grid size-28 place-items-center rounded-full ${className}`}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink font-mono text-[8.6px] uppercase tracking-[0.18em]">
          <textPath href="#badge-circle">{chars}</textPath>
        </text>
      </svg>
      <span className="grid size-12 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:scale-110">
        <ArrowDown className="size-5" />
      </span>
    </a>
  )
}
