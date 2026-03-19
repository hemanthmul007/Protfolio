import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import CursorGlow from './components/CursorGlow.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark text-slate-100">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-size:48px_48px] bg-soft-grid" />
      <div className="noise" />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/30 via-amber-300/15 to-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[30rem] -left-28 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-sky-400/12 via-primary/20 to-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[70rem] -right-28 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-primary/18 via-amber-300/10 to-fuchsia-400/10 blur-3xl" />

      {/* Cursor glow on desktop */}
      <CursorGlow />

      <Navbar />

      <main className="relative pt-20 sm:pt-24">
        <Hero />
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-10" />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mulagada Venkata Hemanth. Crafted with React
        + Tailwind.
      </footer>
    </div>
  )
}
