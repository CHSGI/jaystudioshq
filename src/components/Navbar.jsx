import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useScrollEffects } from '../hooks/useAnimations';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { scrolled, progress } = useScrollEffects();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      document.body.style.overflow = open ? '' : 'hidden';
      return !open;
    });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="/logo.png" alt="Jay Studios" />
          </Link>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
              Start a Project
            </Link>
          </div>
          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        role="presentation"
      />
    </>
  );
}
