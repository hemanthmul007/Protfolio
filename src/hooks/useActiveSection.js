import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(ids = []) {
  const targets = useMemo(() => ids.filter(Boolean), [ids])
  const [active, setActive] = useState(targets[0] ?? '')

  useEffect(() => {
    if (!targets.length) return

    const els = targets
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [targets])

  return active
}

