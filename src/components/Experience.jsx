import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { timeline } from '../data/content'
import { container, itemUp } from '../utils/motion'

const badge = (type) => {
  const map = {
    Education: 'from-sky-400/20 to-sky-400/5 text-sky-300 border-sky-400/25',
    Internship:
      'from-primary/20 to-primary/5 text-primary border-primary/25',
  }
  return map[type] ?? 'from-white/10 to-white/5 text-slate-200 border-white/10'
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A timeline of learning and building."
      subtitle="Clear, readable flow that looks great on mobile and desktop."
    >
      <motion.div variants={container(0)} className="relative">
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="grid gap-5 md:grid-cols-2">
          {timeline.map((t, idx) => (
            <motion.div
              key={`${t.title}-${t.period}`}
              variants={itemUp(idx * 0.04)}
              className={`relative pl-10 md:pl-0 ${
                idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
              }`}
            >
              <div
                className={`absolute left-3 top-6 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_26px_rgba(249,115,22,0.55)] md:left-1/2 md:-translate-x-1/2`}
              />

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-2xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`rounded-full border bg-gradient-to-b px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] ${badge(
                      t.type
                    )}`}
                  >
                    {t.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {t.period}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-extrabold text-slate-100 sm:text-lg">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-300">
                  {t.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {t.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

