import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown, HiOutlineSparkles } from 'react-icons/hi2'
import Container from './Container.jsx'
import { highlights, links, profile } from '../data/content'
import { container, itemLeft, itemRight, itemUp } from '../utils/motion'
import profileImg from '../assets/Hemanth.jpeg'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20"
    >
      <Container>
        <motion.div
          variants={container(0.05)}
          initial="hidden"
          animate="show"
          className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1.05fr_0.9fr] md:gap-12"
        >
          {/* Left */}
          <div className="order-2 text-center md:order-1 md:text-left md:max-w-xl">
            <motion.div variants={itemLeft(0)} className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1">
              <HiOutlineSparkles className="text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Premium Developer Portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemLeft(0.05)}
              className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Hemanth
              </span>
              .
              <br />
              I craft{' '}
              <span className="text-slate-100">modern</span> web apps with{' '}
              <span className="text-slate-100">polish</span>.
            </motion.h1>

            <motion.p
              variants={itemLeft(0.08)}
              className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg md:mx-0 md:text-xl"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={itemLeft(0.12)}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-orange-500 active:translate-y-0"
              >
                View Projects
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-950/10 transition group-hover:bg-slate-950/15">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10"
              >
                Contact
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-slate-100 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-slate-100 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </motion.div>

            <motion.div
              variants={itemUp(0.16)}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="gradient-border rounded-2xl p-4 shadow-soft"
                >
                  <div className="glass rounded-[0.9rem] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                      {h.label}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-slate-100">
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            variants={itemRight(0.06)}
            className="order-1 mx-auto w-full max-w-xs sm:max-w-sm md:order-2"
          >
            <div className="gradient-border relative rounded-[2rem] p-1.5 shadow-soft">
              <div className="glass relative overflow-hidden rounded-[1.6rem]">
                <div className="absolute -left-16 -top-20 h-44 w-44 rounded-full bg-primary/35 blur-3xl" />
                <div className="absolute -right-14 bottom-10 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />

                <motion.div
                  className="relative aspect-[4/5] overflow-hidden"
                  animate={
                    reduce
                      ? undefined
                      : {
                          y: [0, -10, 0],
                        }
                  }
                  transition={
                    reduce
                      ? undefined
                      : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
                  }
                >
                  <img
                    src={profileImg}
                    alt={profile.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                      {profile.role}
                    </p>
                    <p className="mt-1 text-base font-extrabold text-slate-50">
                      {profile.name}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-2 p-4">
                  {['React', 'DevOps', 'AWS'].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-bold text-slate-100"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mx-auto mt-10 hidden w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-xl transition hover:border-primary/40 hover:bg-white/10 sm:flex"
            aria-label="Scroll to About"
          >
            Scroll
            <HiArrowDown className="text-base text-primary" />
          </motion.a>
        </AnimatePresence>
      </Container>
    </section>
  )
}

