import { Award, GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Education() {
  return (
    <section id="formacao" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 md:py-36">
      <SectionHeading index="06" title="Formação" aside="Aprendizado contínuo" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface p-8">
            <GraduationCap className="size-7 text-accent" />
            <p className="label mt-6 text-accent">{education.degree.status}</p>
            <h3 className="mt-2 font-display text-3xl uppercase leading-tight tracking-wide">{education.degree.title}</h3>
            <p className="mt-3 text-muted">{education.degree.school}</p>
          </div>
        </Reveal>

        <ul className="border-t border-line">
          {education.certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <li className="flex items-center gap-5 border-b border-line py-5">
                <Award className="size-5 shrink-0 text-accent" />
                <div className="flex-1">
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
                {c.year && <span className="label text-muted">{c.year}</span>}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
