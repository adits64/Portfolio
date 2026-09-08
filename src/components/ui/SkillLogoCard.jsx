import { useState, useEffect } from "react"
import { cyclingSkills } from "../../data/portfolioData"

function SkillIcon({ type, color }) {
  switch (type) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="40" height="40" fill="none" className="sm:w-[46px] sm:h-[46px]">
          <circle cx="0" cy="0" r="2.05" fill={color} />
          <g stroke={color} strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill={color} className="sm:w-[46px] sm:h-[46px]">
          <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.8l-6.7-3.9V7.9L12 4l6.7 3.9v8zM12 7.2L7.3 9.9v4.2L12 16.8l4.7-2.7V9.9L12 7.2z" />
        </svg>
      )
    case "express":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[46px] sm:h-[46px]">
          <path d="M4 12h16M14 6l6 6-6 6M4 6v12" />
          <text x="5" y="19.5" fill={color} stroke="none" fontSize="8" fontWeight="bold" fontFamily="monospace">ex</text>
        </svg>
      )
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill={color} className="sm:w-[46px] sm:h-[46px]">
          <path d="M12 1.5C12 1.5 6.5 7.8 6.5 13.2c0 3.7 2.4 6.7 5.5 7.6v1.7h.2c3.1-.9 5.3-3.9 5.3-7.6C17.5 7.8 12 1.5 12 1.5zm-.2 17.5c-2.2-.6-3.8-2.6-3.8-4.9 0-3 2.9-6.9 3.8-8.1v13zm.4 0V5.9c.9 1.2 3.8 5.1 3.8 8.1 0 2.3-1.6 4.3-3.8 4.9z" />
        </svg>
      )
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" className="sm:w-[46px] sm:h-[46px]">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.9v-5.9h-1.6v5.8c0 .8-.4 1.2-1.1 1.2-.5 0-1-.2-1.4-.5l-.7.5zm7.3-.2c.9.6 2 .9 3.1.9 1.8 0 2.9-1 2.9-2.5 0-1.4-.9-2.1-2.4-2.7l-.7-.3c-.8-.3-1.2-.6-1.2-1.2 0-.6.5-1 1.3-1 .7 0 1.4.3 1.9.7l.7-.9c-.6-.5-1.5-.8-2.5-.8-1.7 0-2.7 1-2.7 2.4 0 1.3.8 2.1 2.2 2.6l.7.3c.9.4 1.4.7 1.4 1.4 0 .7-.6 1.2-1.5 1.2-.9 0-1.7-.4-2.3-1l-.7.9z" fill="#000" />
        </svg>
      )
    case "jwt":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[46px] sm:h-[46px]">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" fill={color} />
        </svg>
      )
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill={color} className="sm:w-[46px] sm:h-[46px]">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
      )
    case "git":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill={color} className="sm:w-[46px] sm:h-[46px]">
          <path d="M21.6 10.8l-8.4-8.4a2.4 2.4 0 0 0-3.4 0L7.4 4.8l3.6 3.6a2.8 2.8 0 0 1 3.5 3.5l3.5 3.5a2.8 2.8 0 1 1-1.7 1.7L13 13.8v4.5a2.8 2.8 0 1 1-2.4 0v-6.3a2.8 2.8 0 0 1-1.5-3.7L5.5 4.7 2.4 7.8a2.4 2.4 0 0 0 0 3.4l8.4 8.4a2.4 2.4 0 0 0 3.4 0l7.4-7.4a2.4 2.4 0 0 0 0-3.4z" />
        </svg>
      )
    case "rest":
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[46px] sm:h-[46px]">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    default:
      return null
  }
}

export default function SkillLogoCard() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const current = cyclingSkills[index]

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cyclingSkills.length)
        setIsTransitioning(false)
      }, 240)
    }, 3200)

    return () => clearInterval(interval)
  }, [isHovered])

  const selectSkill = (idx) => {
    if (idx === index) return
    setIsTransitioning(true)
    setTimeout(() => {
      setIndex(idx)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#0a0a0e",
        border: "1px solid #161622",
        position: "relative",
        overflow: "hidden",
        boxShadow: `0 0 45px ${current.accent}12`,
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        borderColor: `${current.accent}28`,
      }}
      className="p-5 sm:p-7 rounded-none"
    >
      {/* ambient backdrop glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${current.accent}15 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "background 0.5s ease",
        }}
      />

      {/* header status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
          borderBottom: "1px solid #12121a",
          paddingBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: current.accent,
              boxShadow: `0 0 8px ${current.accent}`,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#6a6875",
              fontFamily: "monospace",
            }}
          >
            Core Tech Spotlight
          </span>
        </div>
        <span
          style={{
            fontSize: "0.6rem",
            color: "#4a4855",
            letterSpacing: "0.06em",
            fontFamily: "monospace",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(cyclingSkills.length).padStart(2, "0")}
        </span>
      </div>

      {/* Main cycling content */}
      <div
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(8px) scale(0.96)" : "translateY(0) scale(1)",
          transition: "opacity 0.24s cubic-bezier(0.2, 0.9, 0.3, 1), transform 0.24s cubic-bezier(0.2, 0.9, 0.3, 1)",
        }}
        className="flex flex-row items-center gap-4 sm:gap-6 min-h-[90px]"
      >
        {/* Icon Frame */}
        <div
          style={{
            borderRadius: "6px",
            backgroundColor: "#0d0d14",
            border: `1px solid ${current.accent}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: `0 0 24px ${current.accent}15`,
          }}
          className="w-[60px] h-[60px] sm:w-[74px] sm:h-[74px]"
        >
          <SkillIcon type={current.icon} color={current.accent} />
        </div>

        {/* Text info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: current.accent,
              display: "block",
              marginBottom: "2px",
            }}
          >
            {current.category}
          </span>
          <h3
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.2rem, 2.8vw, 1.45rem)",
              fontWeight: 700,
              color: "#f0ede8",
              marginBottom: "4px",
              lineHeight: 1.1,
            }}
          >
            {current.name}
          </h3>
          <p
            style={{
              fontSize: "0.75rem",
              lineHeight: 1.6,
              color: "#7a7570",
              margin: 0,
            }}
          >
            {current.desc}
          </p>
        </div>
      </div>

      {/* Interactive navigation dots */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "18px",
          paddingTop: "14px",
          borderTop: "1px solid #12121a",
        }}
      >
        {cyclingSkills.map((s, i) => (
          <button
            key={s.id}
            onClick={() => selectSkill(i)}
            title={s.name}
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              backgroundColor: i === index ? current.accent : "#161620",
              boxShadow: i === index ? `0 0 8px ${current.accent}66` : "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  )
}
