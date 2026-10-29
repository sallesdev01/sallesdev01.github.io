import { experience } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 md:py-36">
      <SectionHeading index="03" title="Experiência" aside="2024 — hoje" />

      <ol className="border-t border-line">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="group grid gap-4 border-b border-line py-8 transition-colors md:grid-cols-[220px_1fr_1fr] md:gap-10 md:py-10">
              <div>
                <p className="label text-accent">{job.period}</p>
                <p className="mt-2 text-sm text-muted">{job.place}</p>
                {i === 0 && (
                  <span className="label mt-3 inline-flex items-center gap-2 rounded-full border border-accent/40 px-2.5 py-1 text-[0.6rem] text-accent">
                    <span className="size-1.5 rounded-full bg-accent" /> Atual
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase leading-none tracking-wide transition-colors group-hover:text-accent md:text-4xl">
                  {job.company}
                </h3>
                <p className="mt-2 font-semibold text-ink/80">{job.role}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tools.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2.5 text-[15px] leading-relaxed text-ink/70">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
