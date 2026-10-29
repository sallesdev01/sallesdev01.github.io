import { marquee } from '../data/content'
import { Marquee } from '../components/ui/Marquee'

export function Ticker() {
  return (
    <div className="relative z-10 -rotate-1 border-y border-accent-deep bg-accent py-4 text-white">
      <Marquee duration="45s" gap="2.5rem">
        {marquee.map((item) => (
          <span key={item} className="flex items-center gap-10 font-display text-3xl uppercase sm:text-4xl">
            {item}
            <span className="text-2xl text-black/40">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
