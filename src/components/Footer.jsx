export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #12121a",
      }}
      className="py-6 px-5 sm:px-8 md:px-12 max-w-[1300px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
    >
      <span style={{ fontSize: "0.64rem", color: "#3a3845" }}>
        © 2026 Aditya P. Singh · Built with React + Vite
      </span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/adits64"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.64rem", color: "#3a3845", textDecoration: "none" }}
          className="hover:text-[#e2dfd8] transition-colors"
        >
          GitHub
        </a>
        <span style={{ fontSize: "0.5rem", color: "#22222e" }}>•</span>
        <a
          href="https://www.linkedin.com/in/aditya-singh-b6aa05339"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.64rem", color: "#3a3845", textDecoration: "none" }}
          className="hover:text-[#e2dfd8] transition-colors"
        >
          LinkedIn
        </a>
        <span style={{ fontSize: "0.5rem", color: "#22222e" }}>•</span>
        <a
          href="https://wa.me/9779719740375"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.64rem", color: "#3a3845", textDecoration: "none" }}
          className="hover:text-[#4ade80] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
