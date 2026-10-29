import { motion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { CaseVisual as Visual } from '../data/content'

// Ilustração do resultado do case, feita só com os números reais do case
export function CaseVisual({ visual }: { visual: Visual }) {
  const grid = (
    <div
      aria-hidden
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          'linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />
  )

  if (visual.kind === 'bars') {
    const max = Math.max(...visual.bars.map((b) => b.value))
    return (
      <div className="relative flex size-full flex-col p-6">
        {grid}
        <span className="label relative text-muted">{visual.unit}</span>
        <div className="relative mt-4 flex flex-1 items-end justify-center gap-6 sm:gap-10">
          {visual.bars.map((b, i) => (
            <div key={b.label} className="flex h-full w-24 flex-col items-center justify-end gap-2 sm:w-28">
              <span className={`font-display text-2xl sm:text-3xl ${i === visual.bars.length - 1 ? 'text-ink' : 'text-muted'}`}>
                {b.display}
              </span>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(b.value / max) * 72}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full rounded-t-md ${
                  i === visual.bars.length - 1 ? 'bg-gradient-to-t from-accent-deep to-accent' : 'bg-white/10'
                }`}
              />
              <span className="label text-muted">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (visual.kind === 'split') {
    return (
      <div className="relative grid size-full grid-cols-2">
        {grid}
        {visual.items.map((it) => (
          <div key={it.label} className="relative flex flex-col items-center justify-center gap-2 border-line p-4 first:border-r">
            {it.up ? (
              <ArrowUpRight className="size-8 text-accent" />
            ) : (
              <ArrowDownRight className="size-8 text-muted" />
            )}
            <span className={`font-display text-6xl sm:text-7xl ${it.up ? 'text-accent' : 'text-ink'}`}>{it.display}</span>
            <span className="label text-muted">{it.label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (visual.kind === 'big') {
    return (
      <div className="relative flex size-full flex-col items-center justify-center">
        {grid}
        <span
          className="relative font-display text-[7rem] leading-none text-transparent sm:text-[9rem]"
          style={{
            backgroundImage: 'linear-gradient(180deg, #ff2a2f, #7a0a10)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          {visual.display}
        </span>
        <span className="label relative mt-2 text-muted">{visual.caption}</span>
      </div>
    )
  }

  return (
    <div className="relative flex size-full flex-col items-center justify-center gap-5 p-6">
      {grid}
      <div className="relative grid grid-cols-10 gap-2.5">
        {Array.from({ length: visual.count }, (_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.1, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
            className="size-3.5 rounded-full bg-accent sm:size-4"
          />
        ))}
      </div>
      <span className="relative font-display text-5xl">
        {visual.count} <span className="label align-middle text-muted">{visual.caption}</span>
      </span>
    </div>
  )
}
