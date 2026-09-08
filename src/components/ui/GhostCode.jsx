export default function GhostCode({
  lines,
  top,
  left,
  right,
  opacity = 0.055,
  drift = "left",
  delay = "0s",
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        zIndex: 0,
        pointerEvents: "none",
        fontFamily: "'JetBrains Mono','Fira Code',monospace",
        fontSize: "0.68rem",
        lineHeight: 1.9,
        color: "#d4a843",
        opacity,
        animation: `ghost-drift-${drift} 28s linear infinite`,
        animationDelay: delay,
        userSelect: "none",
        whiteSpace: "pre",
      }}
    >
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  )
}
