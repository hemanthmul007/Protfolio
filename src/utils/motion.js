export const easeOut = [0.16, 1, 0.3, 1]

export const container = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay,
      staggerChildren: 0.08,
      ease: easeOut,
    },
  },
})

export const itemUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay, ease: easeOut },
  },
})

export const itemLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay, ease: easeOut },
  },
})

export const itemRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay, ease: easeOut },
  },
})

