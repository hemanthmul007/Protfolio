import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import Section from './Section.jsx'
import { projects } from '../data/content'
import { container, itemUp } from '../utils/motion'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work with real-world impact."
      subtitle="Interactive cards, premium hover, and clean content hierarchy."
    >
      <motion.div
        variants={container(0)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            variants={itemUp(idx * 0.03)}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group relative rounded-2xl bg-gradient-to-br from-slate-950/70 via-slate-950/55 to-slate-900/40 p-1.5 shadow-soft transition will-change-transform"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-sky-400/5 opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex h-full flex-col rounded-[0.9rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-primary/12 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary">
                  {p.year}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                  shipped
                </span>
              </div>

              <h3 className="text-base font-extrabold tracking-tight text-slate-100 sm:text-lg">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-[11px] font-semibold text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Case study
                </span>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold text-slate-100 transition group-hover:border-primary/35 group-hover:bg-primary group-hover:text-slate-950"
                >
                  View
                  <HiArrowTopRightOnSquare className="text-sm" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}

