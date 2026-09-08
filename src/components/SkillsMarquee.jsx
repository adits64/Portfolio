import { ALL_SKILLS } from "../data/portfolioData"

export default function SkillsMarquee() {
  const doubled = [...ALL_SKILLS, ...ALL_SKILLS]
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #12121a",
        borderBottom: "1px solid #12121a",
        position: "relative",
        backgroundColor: "#08080c",
        width: "100%",
      }}
      className="py-4 sm:py-5"
    >
      {/* Edge gradient masks */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          background: "linear-gradient(90deg, #08080c, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
        className="w-12 sm:w-28 md:w-36"
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          background: "linear-gradient(-90deg, #08080c, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
        className="w-12 sm:w-28 md:w-36"
      />

      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee-left 38s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              paddingRight: "36px",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4a4855",
              whiteSpace: "nowrap",
              fontFamily: "'Instrument Sans', system-ui, sans-serif",
            }}
          >
            {skill}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "#d4a843",
                opacity: 0.6,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
