import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  duration?: string
  gap?: string
  reverse?: boolean
  className?: string
}

// Faixa infinita: o conteúdo é repetido para o loop não ter emenda
export function Marquee({ children, duration = '40s', gap = '2rem', reverse, className = '' }: Props) {
  return (
    <div
      className={`group flex overflow-hidden ${className}`}
      style={{ '--duration': duration, '--gap': gap, gap } as React.CSSProperties}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
          style={{ gap, animationDirection: reverse ? 'reverse' : 'normal' }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
