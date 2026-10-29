import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Check, Images, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { cases, type Case } from '../data/content'
import { CaseVisual } from '../components/CaseVisual'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Cases() {
  const [active, setActive] = useState<Case | null>(null)

  return (
    <section id="cases" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 md:py-36">
      <SectionHeading index="02" title="Cases selecionados" aside={`${cases.length} operações`} />

      <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
        {cases.map((c, i) => (
          <Reveal key={c.id} delay={(i % 2) * 0.1}>
            <button
              onClick={() => setActive(c)}
              className="group block w-full text-left"
              aria-label={`Abrir case ${c.client}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 group-hover:border-accent/50">
                {c.prints[0] ? (
                  <img
                    src={c.prints[0]}
                    alt={`Print de resultados do case ${c.client}`}
                    loading="lazy"
                    className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 pt-10">
                    <CaseVisual visual={c.visual} />
                  </div>
                )}
                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                  {c.channels.slice(0, 3).map((ch) => (
                    <span key={ch} className="rounded-full border border-line bg-bg/70 px-2.5 py-1 text-[11px] text-ink/80 backdrop-blur">
                      {ch}
                    </span>
                  ))}
                </div>
                {c.prints.length > 0 && (
                  <span className="label absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-bg/80 px-3 py-1.5 text-ink backdrop-blur">
                    <Images className="size-3.5" /> {c.prints.length} prints
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-start gap-5">
                <span className="font-display text-5xl leading-none text-accent">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-wide">{c.client}</h3>
                  <p className="label mt-1 text-muted">{c.segment}</p>
                  <p className="mt-3 text-base text-ink/80">{c.headline}</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{active && <CaseModal item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}

function CaseModal({ item, onClose }: { item: Case; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case ${item.client}`}
    >
      <motion.article
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-line bg-bg/80 backdrop-blur transition-colors hover:bg-accent"
        >
          <X className="size-5" />
        </button>

        <div className="aspect-[16/8] border-b border-line bg-bg">
          <CaseVisual visual={item.visual} />
        </div>

        <div className="p-6 sm:p-10">
          <p className="label text-accent">
            {item.segment} · {item.period}
          </p>
          <h3 className="mt-3 font-display text-4xl uppercase leading-none sm:text-5xl">{item.client}</h3>
          <p className="mt-4 text-xl text-ink/90">{item.headline}</p>
          <p className="mt-4 leading-relaxed text-muted">{item.summary}</p>

          <h4 className="label mt-10 text-muted">Resultados</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {item.results.map((r) => (
              <li key={r} className="flex gap-3 rounded-xl border border-line bg-bg/60 p-4 text-sm leading-snug">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {item.channels.map((ch) => (
              <span key={ch} className="rounded-full border border-line px-3 py-1 text-xs text-ink/80">
                {ch}
              </span>
            ))}
          </div>

          {item.prints.length > 0 && (
            <>
              <h4 className="label mt-10 text-muted">Prints das plataformas</h4>
              <div className="mt-4 grid gap-4">
                {item.prints.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Print ${i + 1} do case ${item.client}`}
                    loading="lazy"
                    className="w-full rounded-xl border border-line"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </motion.article>
    </motion.div>
  )
}
