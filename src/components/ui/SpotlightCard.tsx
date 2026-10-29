import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  contentClassName?: string
}

// Card com brilho vermelho que segue o mouse
export function SpotlightCard({ children, className = '', contentClassName = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(227 18 27 / 0.16), transparent 60%)',
        }}
      />
      <div className={`relative ${contentClassName}`}>{children}</div>
    </div>
  )
}
