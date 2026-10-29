import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import { Marquee } from '../components/ui/Marquee'
import { Reveal } from '../components/ui/Reveal'

const channels = [
  { icon: Mail, label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: profile.phone, href: profile.whatsapp },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'in/eosallesofc', href: profile.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'sallesdev01', href: profile.github },
]

export function Contact() {
  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden border-t border-line pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
        style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgb(227 18 27 / 0.28), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="label text-accent">07 — Contato</p>
            <h2 className="mt-4 font-display text-6xl uppercase leading-[0.9] sm:text-7xl md:text-8xl">
              Vamos escalar
              <br />
              <span className="text-outline">sua operação</span>
              <span className="text-accent">✦</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Aberto a novos projetos, consultorias e oportunidades. Me conte sobre o seu negócio e onde você quer chegar.
            </p>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-ink hover:text-bg"
            >
              Chamar no WhatsApp
              <span className="grid size-10 place-items-center rounded-full bg-white text-bg transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-5" />
              </span>
            </a>
          </Reveal>

          <ul className="self-end border-t border-line">
            {channels.map((ch, i) => (
              <Reveal key={ch.label} delay={i * 0.06}>
                <li>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-5 border-b border-line py-5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent">
                      <ch.icon className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="label block text-muted">{ch.label}</span>
                      <span className="mt-0.5 block break-all font-semibold sm:text-lg">{ch.value}</span>
                    </span>
                    <ArrowUpRight className="size-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              </Reveal>
            ))}
            <li className="flex items-center gap-5 py-5 text-muted">
              <span className="grid size-11 place-items-center">
                <MapPin className="size-5 text-accent" />
              </span>
              {profile.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-24 select-none" aria-hidden>
        <Marquee duration="60s" gap="3rem">
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-[18vw] uppercase leading-none text-white/[0.04] md:text-[12vw]">
              {profile.name}
              <span className="text-accent/30">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <footer className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-line px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="label">Feito com React + Tailwind</p>
        <a href="#top" className="flex items-center gap-2 transition-colors hover:text-ink">
          Voltar ao topo <ArrowUp className="size-4" />
        </a>
      </footer>
    </section>
  )
}
