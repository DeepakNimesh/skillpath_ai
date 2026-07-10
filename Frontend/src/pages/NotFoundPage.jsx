// import { Link } from 'react-router-dom'
// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'

// function NotFoundPage() {
//   return (
//     <div className="page-container">
//       <Navbar />
//       <main className="not-found-container">
//         <p className="eyebrow">404 Error</p>
//         <h1>Page Not Found</h1>
//         <p>Sorry, the page you are looking for does not exist.</p>
//         <Link to="/" className="btn btn-primary">Go back home</Link>
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default NotFoundPage






















import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

const NotFoundPage = () => (
  <div style={{
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'var(--color-bg)', textAlign: 'center', padding: 'var(--space-8)'
  }}>
    <div>
      <div style={{ fontSize: '5rem', marginBottom: 'var(--space-4)' }}>🌌</div>
      <h1 style={{ fontSize: 'clamp(4rem,10vw,8rem)', fontWeight: 800, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: 'var(--text-2xl)', margin: 'var(--space-4) 0 var(--space-3)' }}>Page Not Found</h2>
      <p style={{ marginBottom: 'var(--space-8)', maxWidth: 400 }}>The page you're looking for doesn't exist or has been moved. Let's get you back on track!</p>
      <Link to="/">
        <button className="btn btn--primary btn--lg"><FiHome /> Back to Home</button>
      </Link>
    </div>
  </div>
)

export default NotFoundPage