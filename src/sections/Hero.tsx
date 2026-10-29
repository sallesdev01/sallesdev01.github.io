import { motion, useScroll, useTransform } from 'motion/react'
import { MapPin } from 'lucide-react'
import { useRef, useState } from 'react'
import { heroStats, profile } from '../data/content'
import { NumberTicker } from '../components/ui/NumberTicker'
import { RotatingBadge } from '../components/ui/RotatingBadge'

const WORD = 'PERFORMANCE'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const wordY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Se o recorte (PNG sem fundo) não existir, usa a foto original com máscara
  const [cutout, setCutout] = useState(true)

  return (
    <section ref={ref} id="top" className="relative overflow-hidden lg:min-h-[100svh]">
      {/* brilho vermelho de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 38%, rgb(227 18 27 / 0.38), transparent 70%), radial-gradient(40% 40% at 50% 100%, rgb(122 10 16 / 0.5), transparent 70%)',
        }}
      />

      {/* linha superior */}
      <div className="relative z-30 mx-auto flex max-w-7xl items-start justify-between px-5 pt-24 sm:px-8 sm:pt-28">
        <p className="label leading-relaxed">
          <span className="text-accent">Portfólio ✦ {new Date().getFullYear()}</span>
          <br />
          <span className="text-muted">Mídia paga · Dados · Código</span>
        </p>
        <p className="label flex items-center gap-2 text-muted">
          <span className="hidden sm:inline">Disponível para projetos</span>
          <span className="text-accent">✦</span>
        </p>
      </div>

      {/* palavra gigante atrás da foto */}
      <motion.div
        aria-hidden
        style={{ y: wordY }}
        className="pointer-events-none relative z-0 mt-4 select-none text-center lg:absolute lg:inset-x-0 lg:top-[calc(8.5rem+3svh)] lg:mt-0"
      >
        <span
          className="block font-display text-[19vw] uppercase leading-[0.82] tracking-[-0.01em] text-transparent lg:text-[18.4vw]"
          style={{
            backgroundImage: 'linear-gradient(180deg, #ff2a2f 0%, #c10e16 45%, rgb(122 10 16 / 0.15) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          {WORD}
        </span>
      </motion.div>

      {/* foto */}
      <motion.div
        style={{ y: photoY }}
        className="relative z-10 mx-auto -mt-[9vw] h-[68svh] max-h-[640px] w-full max-w-md lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[88svh] lg:max-h-none lg:max-w-2xl"
      >
        {cutout ? (
          <motion.img
            src={profile.photoCutout}
            alt={`Foto de ${profile.name}`}
            onError={() => setCutout(false)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 contrast-[1.08] saturate-[.85]"
            style={{
              maskImage: 'linear-gradient(to right, black 78%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 78%, transparent 100%)',
            }}
          />
        ) : (
          <motion.img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="absolute inset-0 size-full object-cover object-top contrast-[1.08] saturate-[.85]"
            style={{
              maskImage: 'radial-gradient(70% 65% at 50% 40%, black 55%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(70% 65% at 50% 40%, black 55%, transparent 100%)',
            }}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
      </motion.div>

      {/* contorno da palavra por cima da foto: dá o efeito de "atravessar" */}
      <motion.div
        aria-hidden
        style={{ y: wordY }}
        className="pointer-events-none absolute inset-x-0 top-[calc(8.5rem+3svh)] z-20 hidden select-none text-center lg:block"
      >
        <span className="text-outline block font-display text-[18.4vw] uppercase leading-[0.82] tracking-[-0.01em] opacity-60">
          {WORD}
        </span>
      </motion.div>

      {/* conteúdo */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-30 mx-auto -mt-28 grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 lg:mt-0 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1fr_1fr] lg:items-end lg:pb-12"
      >
        <div className="max-w-sm">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.5 }}
            className="-mb-3 font-script text-5xl text-ink/90 sm:text-6xl"
          >
            Olá, eu sou
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="font-display text-7xl uppercase leading-[0.9] sm:text-8xl"
          >
            {profile.firstName}
            <br />
            {profile.lastName}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.75 }}
          >
            <p className="mt-4 font-display text-2xl uppercase leading-tight text-accent">
              Gestor de tráfego
              <br />& desenvolvedor
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{profile.intro}</p>
            <p className="label mt-6 flex items-center gap-2 text-muted">
              <MapPin className="size-3.5 text-accent" />
              {profile.location} · {profile.age} anos
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          className="flex flex-col gap-8 lg:items-end"
        >
          <div className="hidden items-center gap-4 self-end lg:flex lg:mb-auto">
            <span className="grid size-12 place-items-center rounded-full border border-line text-accent">✦</span>
            <p className="max-w-[12rem] text-sm leading-snug text-ink/80">
              Mídia paga com
              <br />
              cabeça de desenvolvedor.
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-4 lg:w-72 lg:grid-cols-1 lg:gap-0">
            {heroStats.map((s) => (
              <li
                key={s.label}
                className="border-t border-line pt-3 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:border-b lg:border-t-0 lg:py-4"
              >
                <NumberTicker
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  immediate
                  className="block whitespace-nowrap font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
                />
                <span className="label mt-1 block text-[0.62rem] text-muted lg:mt-0 lg:max-w-[6.5rem] lg:text-right">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <RotatingBadge
        text="Ver cases"
        href="#cases"
        className="absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2 lg:grid"
      />
    </section>
  )
}
