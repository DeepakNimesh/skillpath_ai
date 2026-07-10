// import { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const closeMenu = () => setMenuOpen(false)

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo" onClick={closeMenu}>
//         SkillPath <span className="gradient-text">AI</span>
//       </Link>
//       <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
//         <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
//         <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
//         <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Contact</NavLink>
//       </div>
//       <button
//         className="navbar-hamburger"
//         type="button"
//         aria-label="Toggle navigation menu"
//         aria-expanded={menuOpen}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? 'X' : '='}
//       </button>
//     </nav>
//   )
// }

// export default Navbar





















import { Link, NavLink } from 'react-router-dom'
import { FiZap, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = () => {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <FiZap className="navbar__logo-icon" />
        <span>SkillPath <span className="gradient-text">AI</span></span>
      </Link>

      <ul className="navbar__links">
        <li><NavLink to="/" end className={({isActive}) => `navbar__link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => `navbar__link ${isActive ? 'active' : ''}`}>About</NavLink></li>
        {user && <li><NavLink to="/resources" className={({isActive}) => `navbar__link ${isActive ? 'active' : ''}`}>Resources</NavLink></li>}
      </ul>

      <div className="navbar__actions">
        {user ? (
          <>
            <Link to="/dashboard">
              <Button variant="secondary" size="sm">Dashboard</Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link>
            <Link to="/register"><Button variant="primary" size="sm">Get Started</Button></Link>
          </>
        )}
        <ThemeToggle />
      </div>

      <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '1.5rem' }}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  )
}

export default Navbar