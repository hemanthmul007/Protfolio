import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { skills } from '../data/content'
import { container, itemUp } from '../utils/motion'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A modern stack, tuned for shipping."
      subtitle="Balanced across frontend craftsmanship, backend fundamentals, and DevOps execution."
    >
      <motion.div variants={container(0)} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            variants={itemUp(idx * 0.02)}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-950/40 backdrop-blur-2xl transition will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/35"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-extrabold text-slate-100 sm:text-base">
                  {skill.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {skill.level}
                </p>
              </div>
              <div className="relative">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                  {skill.value}%
                </span>
                <span className="pointer-events-none absolute -inset-2 rounded-full bg-primary/10 blur-xl opacity-0 transition group-hover:opacity-100" />
              </div>
            </div>

            <div className="mt-4 h-2 w-full rounded-full bg-slate-900/70">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-primary via-amber-300 to-orange-500 transition-all duration-700 ease-out group-hover:shadow-[0_0_26px_rgba(249,115,22,0.65)]"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

