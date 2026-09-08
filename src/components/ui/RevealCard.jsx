import { useState, useRef, useEffect } from "react"

export default function RevealCard({
  children,
  style = {},
  delay = 0,
  accent,
}) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [hov, setHov] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis
          ? "translateY(0) scale(1)"
          : "translateY(28px) scale(0.97)",
        transition: `opacity 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, border-color 0.3s`,
        boxShadow: hov && accent ? `0 0 40px ${accent}18` : "none",
        borderColor:
          hov && accent ? `${accent}35` : (style.borderColor ?? "#12121a"),
      }}
    >
      {children}
    </div>
  )
}
