function TestimonialSection() {
  const testimonials = [
    { name: 'Deepak', role: 'Computer Science Student', quote: 'The AI doubt assistant answered my coding queries and helped me stay consistent.' },
    { name: 'Aryan', role: 'Self-taught Developer', quote: 'Following the personalized roadmap helped me build my first full-stack app.' },
    { name: 'Arpit', role: 'High School Teacher', quote: 'A useful resource for learners who need clear guidance and affordable support.' },
  ]

  return (
    <section className="testimonials-section">
      <h2>What Our <span className="gradient-text">Students Say</span></h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <h4 className="author">{testimonial.name}</h4>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
