import GhostCode from "./ui/GhostCode"
import RevealCard from "./ui/RevealCard"
import Typewriter from "./ui/Typewriter"
import { learning, bgMiddleware } from "../data/portfolioData"

export default function Learning() {
  return (
    <section
      id="learning"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
    >
      <div className="hidden sm:block">
        <GhostCode
          lines={bgMiddleware}
          top="10%"
          right="1%"
          opacity={0.035}
          drift="left"
          delay="1s"
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "0.67rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#d4a843",
              whiteSpace: "nowrap",
            }}
          >
            Expanding My Stack
          </span>
          <div
            style={{ flex: 1, height: "1px", backgroundColor: "#12121a" }}
          />
          <span
            style={{
              fontSize: "0.67rem",
              color: "#6a6875",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
            }}
            className="hidden sm:inline"
          >
            Active Exploration
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {learning.map(({ label, pct, accent, note }, i) => (
              <RevealCard
                key={label}
                delay={i * 0.1}
                accent={accent}
                style={{
                  backgroundColor: "#0a0a0e",
                  border: "1px solid #12121a",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "6px",
                    gap: "8px",
                  }}
                >
                  <p style={{ fontSize: "0.8rem", color: "#b0adb8", fontWeight: 500 }}>
                    {label}
                  </p>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      padding: "2px 7px",
                      border: `1px solid ${accent}28`,
                      color: accent + "99",
                      flexShrink: 0,
                    }}
                  >
                    {pct >= 55 ? "Active" : pct >= 40 ? "Building" : "Exploring"}
                  </span>
                </div>
                <p style={{ fontSize: "0.68rem", color: "#6a6875", marginBottom: "10px" }}>
                  {note}
                </p>
                <div style={{ height: "2px", backgroundColor: "#161620" }}>
                  <div
                    style={{
                      height: "2px",
                      width: `${pct}%`,
                      backgroundColor: accent,
                      boxShadow: `0 0 8px ${accent}55`,
                    }}
                  />
                </div>
              </RevealCard>
            ))}
          </div>

          {/* Typewriter terminal — expanding.log */}
          <RevealCard
            delay={0.15}
            style={{
              backgroundColor: "#09090e",
              border: "1px solid #1a1824",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid #12121a",
                padding: "9px 14px",
                backgroundColor: "#07070a",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#ff5f57",
                }}
              />
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#febc2e",
                }}
              />
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#28c840",
                }}
              />
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "0.6rem",
                  color: "#6a6875",
                  letterSpacing: "0.06em",
                }}
              >
                expanding.log
              </span>
            </div>
            <div
              style={{
                padding: "18px 16px",
                fontFamily: "'JetBrains Mono','Fira Code',monospace",
                fontSize: "clamp(0.66rem, 1.8vw, 0.72rem)",
                lineHeight: 1.85,
                color: "#6a6880",
                minHeight: "200px",
                overflowX: "auto",
              }}
            >
              <Typewriter
                speed={26}
                lines={[
                  "$ tsc --init",
                  "> target: ES2022, strict: true ✓",
                  "$ ng new angular-showcase",
                  "> signals + reactive forms ready ✓",
                  "$ curl api.openai.com/v1/chat/completions",
                  "> stream: true, tool_calls enabled ✓",
                  "$ npx langchain build-rag",
                  "> vector embeddings indexed ✓",
                  "// mastering MERN. expanding forward. 🚀",
                ]}
              />
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  )
}
