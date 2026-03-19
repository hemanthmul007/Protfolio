import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { container, itemUp } from '../utils/motion'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Design-minded developer with an execution mindset."
      subtitle="I care about details: spacing, motion, and clean architecture that scales."
    >
      <motion.div
        variants={container(0)}
        className="grid gap-4 md:grid-cols-12 md:gap-6"
      >
        <motion.div
          variants={itemUp(0)}
          className="md:col-span-7 rounded-2xl bg-white/5 p-5 shadow-soft backdrop-blur-2xl border border-white/10"
        >
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            I&apos;m a Computer Science undergraduate focused on{' '}
            <span className="font-semibold text-slate-100">
              full‑stack development
            </span>{' '}
            and{' '}
            <span className="font-semibold text-slate-100">
              DevOps workflows
            </span>
            . I love building responsive UIs, performant APIs, and CI/CD pipelines
            that keep shipping smooth and safe.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: 'UI/UX polish',
                text: 'Premium spacing, typography, and subtle motion that feels fast.',
              },
              {
                title: 'Production mindset',
                text: 'CI/CD, containers, and deploy-ready code structure.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
                  {b.title}
                </p>
                <p className="mt-2 text-sm text-slate-300">{b.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemUp(0.06)}
          className="md:col-span-5 rounded-2xl gradient-border p-1.5 shadow-soft"
        >
          <div className="glass rounded-[0.9rem] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              What I&apos;m looking for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 sm:text-base">
              {[
                'Full‑Stack / DevOps internships',
                'React + Node / Spring Boot projects',
                'Cloud deployments and scalable CI/CD',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_20px_rgba(249,115,22,0.65)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Current focus
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                React + Tailwind + Motion • Docker • AWS
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

