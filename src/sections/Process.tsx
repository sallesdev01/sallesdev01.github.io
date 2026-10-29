import { BarChart3, Crosshair, Layers, Rocket, Search } from 'lucide-react'
import { process, profile } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const icons = [Search, Crosshair, Layers, BarChart3, Rocket]

export function Process() {
  return (
    <section id="metodo" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 md:py-36">
      <SectionHeading index="04" title="Método" aside="Do dado à escala" />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <ol className="relative">
          <span aria-hidden className="absolute bottom-8 left-[5rem] top-8 w-px bg-line sm:left-[6rem]" />
          {process.map((step, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative flex items-start gap-4 py-5 sm:gap-6">
                  <span className="w-10 shrink-0 pt-3 font-display text-2xl text-accent sm:w-12 sm:text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-line bg-bg">
                    <Icon className="size-5 text-ink" />
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl uppercase tracking-wide">{step.title}</h3>
                    <p className="mt-1 max-w-md text-[15px] leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>

        <Reveal delay={0.2} className="h-full">
          <figure className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-deep p-8 sm:p-10">
            <span aria-hidden className="font-display text-8xl leading-none text-black/30">“</span>
            <blockquote className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Tráfego sem rastreamento é aposta. Com dado, vira escala.
            </blockquote>
            <figcaption className="mt-8">
              <span className="font-script text-6xl text-white">{profile.firstName}</span>
              <p className="label mt-2 text-white/70">Vamos crescer com previsibilidade</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
