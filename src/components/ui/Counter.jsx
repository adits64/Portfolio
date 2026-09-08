import { useState, useRef, useEffect } from "react"

export default function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        obs.disconnect()
        let v = 0
        const go = () => {
          v += Math.ceil((target - v) / 7) || 1
          setVal(Math.min(v, target))
          if (v < target) requestAnimationFrame(go)
        }
        requestAnimationFrame(go)
      },
      { threshold: 0.5 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}
