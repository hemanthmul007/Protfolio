import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'
import Section from './Section.jsx'
import { links } from '../data/content'
import { container, itemUp } from '../utils/motion'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something impressive."
      subtitle="Quick form + direct links. Touch-friendly and fast on mobile."
    >
      <motion.div
        variants={container(0)}
        className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.form
          variants={itemUp(0)}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
                Name
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none ring-primary/30 placeholder:text-slate-500 focus:border-primary/40 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none ring-primary/30 placeholder:text-slate-500 focus:border-primary/40 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
              Message
            </label>
            <textarea
              rows={5}
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none ring-primary/30 placeholder:text-slate-500 focus:border-primary/40 focus:ring-2"
              placeholder="Tell me about the role or your project..."
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Send Message
            <HiPaperAirplane className="text-base" />
          </button>
          <p className="mt-3 text-xs text-slate-400">
            Demo form (wire to Formspree/EmailJS later).
          </p>
        </motion.form>

        <motion.div
          variants={itemUp(0.06)}
          className="gradient-border rounded-2xl p-1.5 shadow-soft"
        >
          <div className="glass rounded-[0.9rem] p-5">
            <p className="text-sm font-extrabold text-slate-100">
              Direct contact
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Prefer direct reach out? Here are the fastest options.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href={`mailto:${links.email}`}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-100 transition hover:border-primary/40 hover:bg-white/10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  Email
                </span>
                <div className="mt-1 text-primary">{links.email}</div>
              </a>
              <a
                href={`tel:${links.phone}`}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-100 transition hover:border-primary/40 hover:bg-white/10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  Phone
                </span>
                <div className="mt-1 text-primary">{links.phone}</div>
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-100 transition hover:border-primary/40 hover:bg-white/10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  GitHub
                </span>
                <div className="mt-1 text-primary">hemanthmul007</div>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-100 transition hover:border-primary/40 hover:bg-white/10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  LinkedIn
                </span>
                <div className="mt-1 text-primary">mulagada-venkata-hemanth</div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

