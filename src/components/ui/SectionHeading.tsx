import { Reveal } from './Reveal'

type Props = {
  index: string
  title: string
  aside?: string
}

// Cabeçalho de seção: número, título e linha até a borda
export function SectionHeading({ index, title, aside }: Props) {
  return (
    <Reveal className="mb-12 flex items-end gap-6 md:mb-16">
      <span className="label pb-2 text-accent">{index}</span>
      <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <span className="mb-3 hidden h-px flex-1 bg-line md:block" />
      {aside && <span className="label hidden pb-2 text-muted md:block">{aside}</span>}
    </Reveal>
  )
}
