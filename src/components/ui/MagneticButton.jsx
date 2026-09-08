import { useState, useRef, useCallback } from "react"

export default function MagneticButton({ children, href }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hov, setHov] = useState(false)
  const raf = useRef(0)

  const onMove = useCallback((e) => {
    // Disable magnetic physics on touch pointers for stability
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.35
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.35
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => setPos({ x: dx, y: dy }))
  }, [])

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => {
        setPos({ x: 0, y: 0 })
        setHov(false)
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "14px 28px",
        fontSize: "0.74rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: 600,
        textDecoration: "none",
        backgroundColor: hov ? "#d4a843" : "transparent",
        color: hov ? "#07070a" : "#d4a843",
        border: "1px solid #d4a843",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition:
          "transform 0.28s cubic-bezier(0.23,1,0.32,1), background-color 0.2s, color 0.2s, box-shadow 0.2s",
        boxShadow: hov ? "0 0 36px rgba(212,168,67,0.28)" : "none",
        maxWidth: "100%",
        textAlign: "center",
        cursor: "pointer",
        touchAction: "manipulation",
      }}
    >
      <span style={{ whiteSpace: "nowrap" }}>{children}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        style={{
          transform: hov ? "translate(2px,-2px)" : "none",
          transition: "transform 0.2s",
          flexShrink: 0,
        }}
      >
        <path
          d="M1 13L13 1M13 1H4M13 1V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
