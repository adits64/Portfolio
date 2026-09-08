import { useState, useRef, useCallback } from "react"
import devPhoto from "../assets/developer_crossed_arms.jpg"
import GhostCode from "./ui/GhostCode"
import MagneticButton from "./ui/MagneticButton"
import OrbitRing from "./ui/OrbitRing"
import { bgExpress, bgMiddleware, bgRouter, bgSchema } from "../data/portfolioData"

export default function Hero() {
  const photoRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, shadowX: 0, shadowY: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const rafRef = useRef(0)

  const handlePhotoMouseMove = useCallback((e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (!photoRef.current) return
    const rect = photoRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const normX = x / (rect.width / 2)
    const normY = y / (rect.height / 2)

    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setTilt({
        x: -normY * 7,
        y: normX * 7,
        shadowX: -normX * 14,
        shadowY: -normY * 14,
      })
    })
  }, [])

  const handlePhotoMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    setTilt({ x: 0, y: 0, shadowX: 0, shadowY: 0 })
    setIsHovered(false)
  }, [])

  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="min-h-[86vh] md:min-h-[90vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-5 sm:px-8 md:px-8 lg:px-12"
    >
      {/* ABSOLUTE BACKGROUND LAYER — COMPLETELY ISOLATED FROM CONTENT FLOW */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.028) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated scanline */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg,transparent,rgba(212,168,67,0.12),transparent)",
            animation: "scanline 10s linear infinite",
          }}
        />

        {/* Ambient background code lines */}
        <div className="hidden sm:block">
          <GhostCode
            lines={bgExpress}
            top="12%"
            left="2%"
            opacity={0.045}
            drift="left"
            delay="0s"
          />
          <GhostCode
            lines={bgMiddleware}
            top="58%"
            left="1%"
            opacity={0.035}
            drift="right"
            delay="4s"
          />
          <GhostCode
            lines={bgRouter}
            top="16%"
            right="2%"
            opacity={0.04}
            drift="right"
            delay="2s"
          />
          <GhostCode
            lines={bgSchema}
            top="64%"
            right="2%"
            opacity={0.035}
            drift="left"
            delay="6s"
          />
        </div>
      </div>

      {/* MAIN HERO CONTENT CONTAINER: STRICT 2-COLUMN ROW FROM 768PX+ */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
        className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-8 lg:gap-14"
      >
        {/* LEFT COLUMN: INTRO / DESCRIPTION */}
        <div className="flex flex-col justify-center min-w-0 order-1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
                display: "inline-block",
                animation: "pulse-glow 2s ease infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.68rem",
                color: "#6a6875",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Available · MERN Stack Developer
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              lineHeight: 1.03,
              letterSpacing: "-0.035em",
              marginBottom: 0,
            }}
            className="text-[2.6rem] sm:text-[3.2rem] md:text-[2.8rem] lg:text-[4.2rem] xl:text-[5.4rem]"
          >
            <span
              style={{
                display: "block",
                fontWeight: 400,
                letterSpacing: "0.01em",
                color: "#e2dfd8",
                marginBottom: "8px",
                fontFamily: "'Instrument Sans', system-ui, sans-serif",
              }}
              className="text-[1.1rem] sm:text-[1.25rem] md:text-[1.15rem] lg:text-[1.5rem] xl:text-[1.75rem]"
            >
              Aditya P. Singh
            </span>
            Full-stack
            <br />
            <em style={{ fontWeight: 300, color: "#3a3840" }}>developer</em>
            <br />
            <span style={{ color: "#d4a843" }}>∙</span> problem solver.
          </h1>

          <p
            style={{
              marginTop: "20px",
              lineHeight: 1.75,
              color: "#6a6870",
            }}
            className="text-[0.84rem] sm:text-[0.88rem] md:text-[0.82rem] lg:text-[0.88rem] max-w-[440px]"
          >
            I build full-stack applications with the MERN stack (React, Node.js,
            Express, MongoDB), focusing on clean architecture, robust auth, and
            scalable REST APIs — currently expanding into TypeScript and AI integration.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "14px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <a
              href="#contact"
              style={{
                fontSize: "0.75rem",
                color: "#6a6875",
                letterSpacing: "0.05em",
                textDecoration: "none",
                borderBottom: "1px solid #1e1c28",
                paddingBottom: "2px",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e2dfd8"
                e.currentTarget.style.borderColor = "#6a6870"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6a6875"
                e.currentTarget.style.borderColor = "#1e1c28"
              }}
            >
              Get in touch →
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFILE PHOTO */}
        <div className="flex items-center justify-center min-w-0 w-full order-2 py-4 md:py-0">
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              left: "-12px",
              top: "10%",
              bottom: "10%",
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, rgba(212,168,67,0.2), transparent)",
            }}
          />

          {/* Ambient background radial glow */}
          <div
            style={{
              position: "absolute",
              width: "min(380px, 90vw)",
              height: "min(420px, 90vw)",
              borderRadius: "50%",
              background: isHovered
                ? "radial-gradient(circle, rgba(212,168,67,0.18) 0%, rgba(124,108,212,0.1) 45%, transparent 70%)"
                : "radial-gradient(circle, rgba(212,168,67,0.1) 0%, rgba(124,108,212,0.05) 45%, transparent 70%)",
              filter: "blur(35px)",
              pointerEvents: "none",
              transition: "background 0.5s ease, transform 0.5s ease",
              transform: `translate(${tilt.shadowX * 0.5}px, ${tilt.shadowY * 0.5}px)`,
              zIndex: 0,
            }}
          />

          <div
            ref={photoRef}
            onMouseMove={handlePhotoMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handlePhotoMouseLeave}
            style={{
              position: "relative",
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.025 : 1})`,
              transition: isHovered
                ? "transform 0.12s ease-out, box-shadow 0.3s ease"
                : "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.5s ease",
              cursor: "pointer",
            }}
            className="w-[230px] h-[310px] sm:w-[260px] sm:h-[350px] md:w-[250px] md:h-[340px] lg:w-[280px] lg:h-[380px] xl:w-[310px] xl:h-[415px]"
          >
            {/* Orbit rings */}
            <div
              style={{
                position: "absolute",
                inset: "-45px",
                zIndex: 0,
                pointerEvents: "none",
              }}
              className="hidden sm:block"
            >
              <OrbitRing
                size={370}
                duration={22}
                color="rgba(212,168,67,0.14)"
              />
              <OrbitRing
                size={275}
                duration={14}
                color="rgba(124,108,212,0.12)"
                reverse
              />
            </div>

            {/* Photo frame container */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                border: "1px solid rgba(212,168,67,0.22)",
                backgroundColor: "#0d0d12",
                boxShadow: isHovered
                  ? `0 24px 60px rgba(0,0,0,0.8), 0 0 45px rgba(212,168,67,0.22), inset 0 0 20px rgba(212,168,67,0.08)`
                  : `0 18px 45px rgba(0,0,0,0.7), 0 0 25px rgba(212,168,67,0.08), inset 0 0 15px rgba(0,0,0,0.4)`,
                overflow: "hidden",
                transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                borderColor: isHovered ? "rgba(212,168,67,0.45)" : "rgba(212,168,67,0.22)",
              }}
            >
              <img
                src={devPhoto}
                alt="Aditya P. Singh"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: isHovered
                    ? "grayscale(0%) contrast(1.1) brightness(1.03)"
                    : "grayscale(8%) contrast(1.06)",
                  opacity: 0.94,
                  transition: "filter 0.4s ease, transform 0.4s ease",
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                }}
              />

              {/* Depth & edge gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(160deg, rgba(212,168,67,0.09) 0%, transparent 45%, rgba(7,7,10,0.55) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Top rim highlight */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #d4a843, transparent)",
                  opacity: isHovered ? 0.9 : 0.5,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>

            {/* Corner accents */}
            {[
              { t: 0, l: 0, bt: true, bl: true },
              { t: 0, r: 0, bt: true, br: true },
              { b: 0, l: 0, bb: true, bl: true },
              { b: 0, r: 0, bb: true, br: true },
            ].map((c, k) => (
              <div
                key={k}
                style={{
                  position: "absolute",
                  width: 14,
                  height: 14,
                  top: c.t,
                  bottom: c.b,
                  left: c.l,
                  right: c.r,
                  borderTop: c.bt ? "1px solid #d4a843" : undefined,
                  borderBottom: c.bb ? "1px solid #d4a843" : undefined,
                  borderLeft: c.bl ? "1px solid #d4a843" : undefined,
                  borderRight: c.br ? "1px solid #d4a843" : undefined,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            ))}

            {/* Floating terminal badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                left: "-16px",
                zIndex: 3,
                animation: "float 7s ease-in-out infinite",
                pointerEvents: "none",
              }}
              className="sm:left-[-26px] md:left-[-28px] lg:left-[-40px]"
            >
              <div
                style={{
                  backgroundColor: "rgba(7,7,10,0.94)",
                  border: "1px solid rgba(74,222,128,0.22)",
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: "0.62rem",
                  color: "#4ade80",
                  letterSpacing: "0.05em",
                  lineHeight: 1.5,
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                $ npm run dev
                <br />
                <span style={{ color: "#384535" }}>▶ ready on :5000</span>
              </div>
            </div>

            {/* Floating stack badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                right: "-16px",
                zIndex: 3,
                animation: "float 9s ease-in-out infinite 2s",
                pointerEvents: "none",
              }}
              className="sm:right-[-24px] md:right-[-26px] lg:right-[-38px]"
            >
              <div
                style={{
                  backgroundColor: "rgba(7,7,10,0.94)",
                  border: "1px solid rgba(212,168,67,0.22)",
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: "0.62rem",
                  color: "#d4a843cc",
                  letterSpacing: "0.05em",
                  lineHeight: 1.5,
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                M · E · R · N<br />
                <span style={{ color: "#3a3828" }}>+ TS · Angular · AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
