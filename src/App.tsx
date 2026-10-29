import { MotionConfig } from 'motion/react'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Ticker } from './sections/Ticker'
import { About } from './sections/About'
import { Cases } from './sections/Cases'
import { Experience } from './sections/Experience'
import { Process } from './sections/Process'
import { Stack } from './sections/Stack'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain overflow-x-clip">
        <Nav />
        <main>
          <Hero />
          <Ticker />
          <About />
          <Cases />
          <Experience />
          <Process />
          <Stack />
          <Education />
          <Contact />
        </main>
        <WhatsAppFloat />
      </div>
    </MotionConfig>
  )
}
