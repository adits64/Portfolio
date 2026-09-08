import { useState } from "react"
import GhostCode from "./ui/GhostCode"
import MagneticButton from "./ui/MagneticButton"
import { bgExpress } from "../data/portfolioData"

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/adits64",
      accent: "#e2dfd8",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-singh-b6aa05339",
      accent: "#0A66C2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/9779719740375",
      accent: "#25D366",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.653.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.679-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.578-.351zM12.042 21.737h-.008a9.715 9.715 0 01-4.962-1.357l-.356-.211-3.691.968.985-3.598-.232-.369a9.71 9.71 0 01-1.49-5.188c0-5.367 4.368-9.734 9.743-9.734 2.6 0 5.044 1.013 6.88 2.851 1.837 1.838 2.848 4.283 2.847 6.883 0 5.368-4.369 9.744-9.736 9.744zm7.982-17.702A11.23 11.23 0 0012.04 0C5.836 0 .783 5.053.78 11.258a11.2 11.2 0 001.527 5.674L0 24l7.253-1.902a11.23 11.23 0 004.783 1.075h.005c6.204 0 11.257-5.053 11.26-11.26 0-3.007-1.171-5.835-3.277-7.942z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        borderTop: "1px solid #12121a",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-16 sm:py-24 px-5 sm:px-8 md:px-12"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.022) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="hidden sm:block">
        <GhostCode
          lines={bgExpress}
          top="8%"
          left="2%"
          opacity={0.03}
          drift="left"
          delay="2s"
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
        className="max-w-[680px] mx-auto"
      >
        <span
          style={{
            fontSize: "0.67rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d4a843",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Contact
        </span>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "20px",
          }}
          className="text-[2.5rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.4rem]"
        >
          Let's build
          <br />
          <em style={{ fontWeight: 300, color: "#3a3840" }}>
            something real.
          </em>
        </h2>
        <p
          style={{
            fontSize: "clamp(0.82rem, 1.8vw, 0.88rem)",
            color: "#6a6875",
            lineHeight: 1.75,
            marginBottom: "36px",
          }}
        >
          Open to full-time roles, freelance, and collaboration.
          <br />
          If you're building something, I'd love to hear about it.
        </p>

        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <MagneticButton href="mailto:adits.rok.64@gmail.com">
            adits.rok.64@gmail.com
          </MagneticButton>
        </div>

        {/* Polished Interactive Social Links with Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "36px",
          }}
          className="sm:gap-5"
        >
          {socials.map((s) => {
            const isHov = hoveredSocial === s.name
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial(s.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "10px 18px",
                  fontSize: "0.74rem",
                  letterSpacing: "0.06em",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "4px",
                  border: isHov ? `1px solid ${s.accent}55` : "1px solid #161622",
                  backgroundColor: isHov ? "#0e0e14" : "#09090d",
                  color: isHov ? s.accent : "#7a7685",
                  transform: isHov ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
                  boxShadow: isHov ? `0 8px 24px ${s.accent}18` : "none",
                  transition: "all 0.22s cubic-bezier(0.2, 0.9, 0.3, 1)",
                  touchAction: "manipulation",
                }}
              >
                <span
                  style={{
                    color: isHov ? s.accent : "#5a5565",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    transform: isHov ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {s.icon}
                </span>
                <span>{s.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
