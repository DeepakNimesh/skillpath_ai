import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">SkillPath Website Enhancement</p>
        <h1>Personalized AI Roadmaps for <span className="gradient-text">Lifelong Learning</span></h1>
        <p>Aligning with UN SDG 4 to make quality education and AI-guided learning accessible through reusable guidance, smart planning, and learner-focused support.</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
      </div>
      <div className="hero-media" aria-hidden="true">
      </div>
    </section>
  )
}

export default HeroSection
