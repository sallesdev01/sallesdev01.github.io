import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  // Começa ao carregar a página, sem esperar entrar na tela (usado no hero)
  immediate?: boolean
}

const format = (n: number) => Math.round(n).toLocaleString('pt-BR')

// Conta de 0 até o valor quando entra na tela
export function NumberTicker({ value, prefix = '', suffix = '', className, immediate }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)
  const start = immediate || inView

  useEffect(() => {
    if (!start || reduce) return
    const controls = animate(0, value, {
      duration: 1.8,
      delay: immediate ? 0.9 : 0,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setDisplay,
    })
    return () => controls.stop()
  }, [start, immediate, reduce, value])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${format(value)}${suffix}`}>
      <span aria-hidden>
        {prefix}
        {format(display)}
        {suffix}
      </span>
    </span>
  )
}
