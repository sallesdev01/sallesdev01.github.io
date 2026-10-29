import { about } from '../data/content'
import { NumberTicker } from '../components/ui/NumberTicker'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 md:py-36">
      <SectionHeading index="01" title="Sobre mim" aside="Tráfego × Tecnologia" />

      <Reveal>
        <p className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          {about.statement.lead} <span className="text-muted">{about.statement.rest}</span>
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-ink/75 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <dl className="divide-y divide-line border-y border-line">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="label text-muted">{f.label}</dt>
                <dd className="text-right font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {about.numbers.map((n, i) => (
          <Reveal key={n.label} delay={i * 0.08} className="bg-bg p-6 sm:p-8">
            <NumberTicker
              value={n.value}
              prefix={n.prefix}
              suffix={n.suffix}
              className="block font-display text-5xl text-ink sm:text-6xl"
            />
            <p className="mt-3 text-sm leading-snug text-muted">{n.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
