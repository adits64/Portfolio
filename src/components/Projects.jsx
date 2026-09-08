import { useState } from "react"
import GhostCode from "./ui/GhostCode"
import RevealCard from "./ui/RevealCard"
import { projects, bgRouter, bgSchema } from "../data/portfolioData"

export default function Projects() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
    >
      {/* Background code */}
      <div className="hidden sm:block">
        <GhostCode
          lines={bgRouter}
          top="5%"
          right="0%"
          opacity={0.03}
          drift="left"
          delay="0s"
        />
        <GhostCode
          lines={bgSchema}
          top="55%"
          left="0%"
          opacity={0.03}
          drift="right"
          delay="3s"
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
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
            Featured Projects
          </span>
          <div
            style={{ flex: 1, height: "1px", backgroundColor: "#12121a" }}
          />
          <span
            style={{
              fontSize: "0.67rem",
              color: "#5a5560",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
            }}
            className="hidden sm:inline"
          >
            MERN Production Applications
          </span>
        </div>

        {/* 2-Project Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((proj, i) => (
            <RevealCard
              key={proj.id}
              delay={i * 0.12}
              accent={proj.accent}
              style={{
                backgroundColor: "#0a0a0e",
                border: "1px solid #14141e",
                overflow: "hidden",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={() => setActiveCard(proj.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Screenshot Frame */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#0d0d12",
                    borderBottom: "1px solid #14141e",
                  }}
                  className="h-[200px] sm:h-[240px] md:h-[260px]"
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      opacity: activeCard === proj.id ? 0.78 : 0.48,
                      transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1)",
                      transform: activeCard === proj.id ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${proj.accent}18 0%, transparent 50%, rgba(10,10,14,0.7) 100%)`,
                    }}
                  />
                  {/* Year Display: 2026 */}
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 16,
                      fontSize: "0.62rem",
                      color: "#e2dfd8",
                      letterSpacing: "0.08em",
                      backgroundColor: "rgba(7,7,10,0.88)",
                      border: "1px solid #22222e",
                      padding: "3px 8px",
                      borderRadius: "2px",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {proj.year}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 16,
                      fontFamily: "'Fraunces', serif",
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: proj.accent + "18",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {proj.num}
                  </span>
                </div>

                {/* Card Information */}
                <div className="p-5 sm:p-7">
                  <p
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: proj.accent,
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    {proj.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                      fontWeight: 700,
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                      color: "#f0ede8",
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      color: "#7a7570",
                      marginBottom: "20px",
                    }}
                  >
                    {proj.desc}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "0.62rem",
                          padding: "3px 9px",
                          border: `1px solid ${proj.accent}25`,
                          color: proj.accent + "cc",
                          backgroundColor: `${proj.accent}08`,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer link / CTA */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  className="px-5 sm:px-7 pb-5 sm:pb-6"
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: activeCard === proj.id ? proj.accent : "#6a6878",
                      letterSpacing: "0.06em",
                      fontWeight: 500,
                      transition: "color 0.2s ease, transform 0.2s ease",
                      transform: activeCard === proj.id ? "translateX(3px)" : "translateX(0)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {proj.ctaText}
                  </span>
                </div>
              </a>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  )
}
