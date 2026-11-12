import { useEffect, useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import portrait from './assets/emily.svg'
import './index.css'

const rotatingPhrases = [
  'UT Austin Alum',
  'Procurement @ IBM'
]

const aboutText =
  "My experience spans data analytics at WWF, survey statistics at USDA, and procurement and administration at UT Austin’s Department of Computer Science. I now work at IBM, developing MCP servers for procurement professionals. Outside of work, I’m committed to volunteering and lifelong learning.";

function App() {
  const [activePhrase, setActivePhrase] = useState(0)
  const [showAbout, setShowAbout] = useState(false)
  const [visibleText, setVisibleText] = useState("")

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % rotatingPhrases.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

useEffect(() => {
  if (!showAbout) {
    setVisibleText("")
    return
  }

  let index = 0
  const step = 1 // characters per tick
  const tickMs = 18 // ~60fps for a smooth reveal

  const timerId = setInterval(() => {
    index = Math.min(index + step, aboutText.length)
    setVisibleText(aboutText.slice(0, index))

    if (index >= aboutText.length) {
      clearInterval(timerId)
    }
  }, tickMs)

  return () => clearInterval(timerId)
}, [showAbout])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('emily.wang.2022@gmail.com')
    } catch {
      // Fail silently for now
    }
  }

  return (
    <div className="page-shell">
      <ShaderGradientCanvas
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(120deg, #071a2f 0%, #0e2d4b 45%, #163c5f 100%)'
        }}
        pixelDensity={1.4}
        fov={45}
      >
        <ShaderGradient
          control="props"
          animate="on"
          type="waterPlane"
          uSpeed={0.20}
          uStrength={2.2}
          uFrequency={3.8}
          uDensity={1.34}
          color1="#2ED8C3"
          color2="#4a7dc9"
          color3="#FFD6A5"
          cDistance={3.6}
          cPolarAngle={110}
          lightType="3d"
          brightness={0.95}
        />
      </ShaderGradientCanvas>
 
      <main className="content">
        <section className="hero-split">
          <div className={`hero-copy ${showAbout ? 'is-flipped' : ''}`}>
            <div className="hero-copy-face hero-copy-front">
              <p className="eyebrow">Portfolio • 2026</p>
              <h1>Emily Wang</h1>
              <div className="dynamic-text" key={rotatingPhrases[activePhrase]}>
                {rotatingPhrases[activePhrase]}
              </div>
              <p className="location">RTP, North Carolina</p>
            </div>

            <div className="hero-copy-face hero-copy-back">
              <p className="eyebrow">About</p>
              <h2>Career journey</h2>
              <p className="about-copy">
                {visibleText}
              </p>
            </div>

            <div className="actions">
              <a
                href="https://www.linkedin.com/in/emily-c-wang/"
                target="_blank"
                rel="noreferrer"
                className="linkedin-btn"
                aria-label="Visit Emily Wang on LinkedIn"
              >
                <span className="linkedin-icon">in</span>
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                className="secondary-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
                >
                <span className="copy-icon">⧉</span>
                <span>Email</span>
              </button>
              <button type="button" className="ghost-btn" onClick={() => setShowAbout((value) => !value)}>
                {showAbout ? 'Back' : 'About'}
              </button>
            </div>
          </div>

          <div className="hero-image-panel">
            <img src={portrait} alt="Portrait of Emily Wang" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
