import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SkillsMarquee from "./components/SkillsMarquee"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import Learning from "./components/Learning"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#07070a",
        color: "#e2dfd8",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Projects />
      <Stack />
      <Learning />
      <Contact />
      <Footer />
    </div>
  )
}
