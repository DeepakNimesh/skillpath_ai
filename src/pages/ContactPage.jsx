import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, subject, message } = formData

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all fields before submitting.')
      setSubmitted(false)
      return
    }

    setError('')
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page-container">
      <Navbar />
      <main className="contact-main">
        <p className="eyebrow">Contact Us</p>
        <h1>Contact <span className="gradient-text">SkillPath AI</span></h1>
        <p className="contact-intro">Have a question, suggestion, or collaboration idea? Send a message and the team will get back to you.</p>

        {error && <div className="error-alert">{error}</div>}
        {submitted && <div className="success-alert">Thank you! Your message has been sent.</div>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Subject
            <input
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
