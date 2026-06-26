import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function AboutPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="about-main">
        <p className="eyebrow">About SkillPath AI</p>
        <h1>Our Mission: <span className="gradient-text">Quality Education for All</span></h1>
        <p className="about-intro">SkillPath AI introduces a simple learning platform focused on accessible, personalized education. Its purpose is to help learners understand where to begin, what to study next, and how to practice with meaningful projects.</p>

        <div className="about-grid">
          <div className="about-card">
            <h3>SDG 4 Alignment</h3>
            <p>The application supports quality education by making guidance easier to access, especially for learners who need structure outside a traditional classroom.</p>
          </div>
          <div className="about-card">
            <h3>Key Features</h3>
            <p>Roadmap guidance, feature highlights, learner testimonials, contact support, and clean page navigation make the site easy to understand and extend.</p>
          </div>
          <div className="about-card">
            <h3>Reusable Design</h3>
            <p>The website is built with shared React components, so navigation, page structure, and layout remain consistent across the application.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
