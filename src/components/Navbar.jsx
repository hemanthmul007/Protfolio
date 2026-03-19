import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => ['hero', ...navLinks.map((n) => n.id)], [])
  const active = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-glow">
          <nav className="flex items-center justify-between px-4 py-3">
            <button
              className="group inline-flex items-center gap-2 rounded-2xl"
              onClick={() => scrollToId('hero')}
              aria-label="Go to top"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-amber-400 shadow-lg shadow-primary/30">
                <span className="text-sm font-extrabold text-slate-950">MH</span>
              </span>
              <span className="hidden text-sm font-semibold text-slate-100 sm:block">
                {profile.name}
              </span>
            </button>

            {/* Desktop */}
            <div className="hidden items-center gap-1 md:flex">
              <div className="relative flex items-center rounded-full border border-white/10 bg-white/5 p-1">
                {navLinks.map((link) => {
                  const isActive = active === link.id
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToId(link.id)}
                      className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition ${
                        isActive ? 'text-slate-950' : 'text-slate-200 hover:text-slate-100'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-amber-400"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  )
                })}
              </div>
              <a
                href="#contact"
                className="ml-3 rounded-full bg-primary px-4 py-2 text-xs font-extrabold text-slate-950 shadow-lg shadow-primary/35 transition hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Mobile */}
            <button
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
            </button>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/10 px-3 py-3 md:hidden"
              >
                <div className="grid gap-2">
                  {navLinks.map((link) => {
                    const isActive = active === link.id
                    return (
                      <button
                        key={link.id}
                        onClick={() => {
                          scrollToId(link.id)
                          setOpen(false)
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? 'bg-primary text-slate-950'
                            : 'bg-white/5 text-slate-100 hover:bg-white/10'
                        }`}
                      >
                        {link.label}
                        <span className="text-xs opacity-70">↳</span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

