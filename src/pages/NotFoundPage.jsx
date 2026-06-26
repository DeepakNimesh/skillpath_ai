import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function NotFoundPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="not-found-container">
        <p className="eyebrow">404 Error</p>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Go back home</Link>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage
