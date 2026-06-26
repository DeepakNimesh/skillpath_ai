import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/landing/HeroSection'
import FeatureCard from '../components/landing/FeatureCard'
import TestimonialSection from '../components/landing/TestimonialSection'
import CTABanner from '../components/landing/CTABanner'

const features = [
  { icon: '01', title: 'AI Roadmap Generator', description: 'Personalized learning paths based on goals, skill level, and available time.', color: '#6C63FF' },
  { icon: '02', title: 'AI Doubt Assistant', description: 'Always-available learning support for coding questions and concept clarity.', color: '#00D4AA' },
  { icon: '03', title: 'Project Recommendations', description: 'Practical project ideas that help learners apply each new skill.', color: '#FF6B6B' },
  { icon: '04', title: 'Progress Tracker', description: 'Simple milestone tracking to keep learning organized and measurable.', color: '#FFD93D' },
]

function LandingPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <HeroSection />
        <section className="features-section">
          <h2 className="section-title">Why Use SkillPath AI?</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </section>
        <TestimonialSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
