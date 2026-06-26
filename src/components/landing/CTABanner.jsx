import { Link } from 'react-router-dom'

function CTABanner() {
  return (
    <section className="cta-banner">
      <h2>Ready to build your personalized skill path?</h2>
      <p>Join learners who are using structured roadmaps and AI guidance to move forward with confidence.</p>
      <Link to="/contact" className="btn btn-light">Send a Message</Link>
    </section>
  )
}

export default CTABanner
