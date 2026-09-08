import { useState, useEffect } from "react"

export default function Typewriter({ lines, speed = 32 }) {
  const [displayed, setDisplayed] = useState([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    const full = lines[lineIdx] ?? ""
    if (charIdx <= full.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev]
          next[lineIdx] = full.slice(0, charIdx)
          return next
        })
        setCharIdx((c) => c + 1)
      }, speed)
      return () => clearTimeout(t)
    } else if (lineIdx < lines.length - 1) {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1)
        setCharIdx(0)
      }, speed * 3)
      return () => clearTimeout(t)
    } else {
      setDone(true)
    }
  }, [charIdx, lineIdx, lines, speed, done])

  return (
    <>
      {lines.map((_, i) => (
        <div key={i} style={{ minHeight: "1.7em" }}>
          {displayed[i] ?? ""}
          {i === lineIdx && !done && <span className="blink-cursor">▍</span>}
        </div>
      ))}
    </>
  )
}
