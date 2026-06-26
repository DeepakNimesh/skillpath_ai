import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        SkillPath <span className="gradient-text">AI</span>
      </Link>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Contact</NavLink>
      </div>
      <button
        className="navbar-hamburger"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'X' : '='}
      </button>
    </nav>
  )
}

export default Navbar
