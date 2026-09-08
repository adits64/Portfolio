import SkillLogoCard from "./ui/SkillLogoCard"

export default function Stack() {
  return (
    <section
      id="stack"
      style={{
        borderTop: "1px solid #12121a",
        backgroundColor: "#08080c",
        position: "relative",
      }}
      className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Tech Stack & Core Skills */}
        <div>
          <span
            style={{
              fontSize: "0.67rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#d4a843",
              display: "block",
              marginBottom: "24px",
            }}
          >
            Core Tech Stack
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.03em",
            }}
          >
            MERN at the core,
            <br />
            <em style={{ fontWeight: 300, color: "#3a3840" }}>
              built for real products.
            </em>
          </h2>
          <p
            style={{
              fontSize: "0.84rem",
              lineHeight: 1.78,
              color: "#6a6870",
              marginBottom: "28px",
            }}
          >
            My primary strength lies in building end-to-end full-stack applications
            with the MERN stack. From designing database schemas and writing custom
            middleware to crafting interactive user interfaces, these are the technologies
            powering my featured platforms like <em>Academix</em> and <em>WanderWise</em>.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "7px",
              marginBottom: "32px",
            }}
          >
            {[
              "React",
              "JavaScript (ES6+)",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "REST APIs",
              "JWT Auth",
              "Tailwind CSS",
              "Git & GitHub",
              "HTML5 & CSS3",
              "Postman",
            ].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: "0.67rem",
                  padding: "5px 11px",
                  border: "1px solid rgba(212,168,67,0.24)",
                  color: "rgba(212,168,67,0.85)",
                  backgroundColor: "rgba(212,168,67,0.035)",
                  letterSpacing: "0.04em",
                }}
              >
                {l}
              </span>
            ))}
          </div>

          <div>
            <span
              style={{
                fontSize: "0.67rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6a6875",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Engineering Philosophy
            </span>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.75,
                color: "#6a6870",
              }}
            >
              I take ownership across the entire software lifecycle — schema modeling,
              stateless JWT authentication, secure API endpoints, and clean component
              abstractions.
            </p>
          </div>
        </div>

        {/* Right Column: Dynamic Cycling Skill Card & About Me */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <SkillLogoCard />

          <div
            style={{
              borderTop: "1px solid #12121a",
              paddingTop: "24px",
            }}
          >
            <span
              style={{
                fontSize: "0.67rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#d4a843",
                display: "block",
                marginBottom: "14px",
              }}
            >
              About Me
            </span>
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: "12px",
                color: "#e2dfd8",
              }}
            >
              Always building, always refining.
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "0.82rem",
                lineHeight: 1.75,
                color: "#6a6870",
              }}
            >
              <p>
                I build web applications by understanding the real domain problems first,
                then engineering clean architectures that scale reliably.
              </p>
              <p>
                I learn by shipping real things, testing edge cases, and continuously
                raising the bar for developer experience and user interface polish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
