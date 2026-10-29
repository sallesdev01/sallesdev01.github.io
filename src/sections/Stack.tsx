import { Code2, LineChart, Megaphone, ShoppingBag } from 'lucide-react'
import { stack } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SpotlightCard } from '../components/ui/SpotlightCard'

const icons = [Megaphone, LineChart, ShoppingBag, Code2]

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 md:py-36">
      <SectionHeading index="05" title="Stack & skills" aside="Marketing + código" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stack.slice(0, 3).map((group, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-7">
                <Icon className="size-6 text-accent" />
                <h3 className="mt-5 font-display text-2xl uppercase tracking-wide">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <li key={it} className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink/80">
                      {it}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}

        <Reveal delay={0.1} className="md:col-span-2 lg:col-span-3">
          <SpotlightCard className="p-7 lg:p-10" contentClassName="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <Code2 className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-3xl uppercase tracking-wide">{stack[3].title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Estudante de Análise e Desenvolvimento de Sistemas. Uso código para conectar plataformas, automatizar rotinas
                e medir o que o painel de anúncios não mede. Este site foi feito por mim em React + Tailwind.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {stack[3].items.map((it) => (
                  <li key={it} className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink/80">
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <CodeWindow />
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}

// Janela de código ilustrativa: evento de conversão enviado pelo servidor
function CodeWindow() {
  const k = 'text-accent'
  const s = 'text-[#e8c49a]'
  const c = 'text-muted'
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-muted">conversions.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-ink/85">
        <code>
          <span className={c}>{'// pedido pago na loja -> evento nas plataformas'}</span>
          {'\n'}
          <span className={k}>export async function</span> onOrderPaid(order) {'{'}
          {'\n'}
          {'  '}
          <span className={k}>const</span> event = {'{'}
          {'\n'}
          {'    '}name: <span className={s}>'Purchase'</span>,{'\n'}
          {'    '}value: order.total,{'\n'}
          {'    '}currency: <span className={s}>'BRL'</span>,{'\n'}
          {'    '}user: hash(order.email),{'\n'}
          {'  }'}
          {'\n\n'}
          {'  '}
          <span className={k}>await</span> Promise.all([{'\n'}
          {'    '}meta.conversionsApi(event),{'\n'}
          {'    '}google.enhancedConversions(event),{'\n'}
          {'    '}tiktok.eventsApi(event),{'\n'}
          {'  ])'}
          {'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  )
}
