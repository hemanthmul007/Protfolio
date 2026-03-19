import Container from './Container.jsx'
import { motion } from 'framer-motion'
import { container, itemUp } from '../utils/motion'

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`py-10 sm:py-12 md:py-16 ${className}`}>
      <Container>
        <motion.div
          variants={container(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemUp(0)} className="mb-6 md:mb-8">
            {eyebrow && (
              <p className="mb-2 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                {eyebrow}
              </p>
            )}
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
          {children}
        </motion.div>
      </Container>
    </section>
  )
}

