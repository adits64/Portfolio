import { useState, useEffect } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(7,7,10,0.92)",
        borderBottom: "1px solid #12121a",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="px-5 sm:px-8 md:px-12"
      >
        {/* Brand Logo */}
        <a
          href="#top"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            textDecoration: "none",
            color: "#f0ede8",
            display: "inline-flex",
            alignItems: "center",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "#d4a843" }}>&lt;</span>APS
          <span style={{ color: "#d4a843" }}>/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Projects", "Stack", "Learning", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: "0.75rem",
                color: "#6a6875",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e2dfd8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6a6875")}
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:adits.rok.64@gmail.com"
            style={{
              fontSize: "0.72rem",
              padding: "7px 18px",
              border: "1px solid #d4a843",
              color: "#d4a843",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "all 0.18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d4a843"
              e.currentTarget.style.color = "#07070a"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "#d4a843"
            }}
          >
            Hire me
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 p-1 border border-[#22222e] bg-[#0d0d12] rounded cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            style={{
              width: "18px",
              height: "1.5px",
              backgroundColor: mobileMenuOpen ? "#d4a843" : "#e2dfd8",
              transform: mobileMenuOpen ? "translateY(4.5px) rotate(45deg)" : "none",
              transition: "transform 0.25s ease, background-color 0.2s ease",
              marginBottom: mobileMenuOpen ? "0" : "4px",
            }}
          />
          <span
            style={{
              width: "18px",
              height: "1.5px",
              backgroundColor: mobileMenuOpen ? "transparent" : "#e2dfd8",
              transition: "background-color 0.2s ease",
              marginBottom: mobileMenuOpen ? "0" : "4px",
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "18px",
              height: "1.5px",
              backgroundColor: mobileMenuOpen ? "#d4a843" : "#e2dfd8",
              transform: mobileMenuOpen ? "translateY(-4.5px) rotate(-45deg)" : "none",
              transition: "transform 0.25s ease, background-color 0.2s ease",
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(7,7,10,0.98)",
            borderTop: "1px solid #161622",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
          className="md:hidden"
        >
          {["Projects", "Stack", "Learning", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "0.9rem",
                color: "#b0adb8",
                letterSpacing: "0.06em",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid #12121a",
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:adits.rok.64@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: "0.78rem",
              padding: "12px 20px",
              border: "1px solid #d4a843",
              color: "#07070a",
              backgroundColor: "#d4a843",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "6px",
            }}
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  )
}
