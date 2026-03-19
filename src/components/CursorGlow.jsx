import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const INITIAL = { x: -200, y: -200 }

export default function CursorGlow() {
  const [pos, setPos] = useState(INITIAL)
  const [active, setActive] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isFinePointer =
      window.matchMedia &&
      window.matchMedia('(pointer: fine)').matches

    if (!isFinePointer) return

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setActive(true)
    }
    const handleLeave = () => {
      setActive(false)
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    >
      <motion.div
        className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35),transparent_65%)] blur-3xl md:h-56 md:w-56"
        animate={{
          x: active ? pos.x : INITIAL.x,
          y: active ? pos.y : INITIAL.y,
          opacity: active ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 30,
          mass: 0.4,
        }}
      />
    </motion.div>
  )
}

