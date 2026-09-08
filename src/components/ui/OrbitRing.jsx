export default function OrbitRing({
  size,
  duration,
  color,
  reverse,
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `1px solid ${color}`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        animation: `${
          reverse ? "spin-rev" : "spin"
        } ${duration}s linear infinite`,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: color,
          top: -2.5,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  )
}
