import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="Jay Studios" />
            <p>A creative multimedia agency dedicated to helping brands communicate through impactful visuals and strategic content.</p>
            <div className="footer-social">
              <a href="https://instagram.com/itz_jaystudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="LinkedIn">IN</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#graphic-design">Graphic Design</Link></li>
              <li><Link to="/services#motion-graphics">Motion Graphics</Link></li>
              <li><Link to="/services#photography">Photography</Link></li>
              <li><Link to="/services#videography">Videography</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+2348129498476">+234 812 949 8476</a></li>
              <li>Akure, Ondo State</li>
              <li>Nigeria</li>
              <li><Link to="/contact">Get in Touch →</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Jay Studios. All rights reserved.</span>
          <span>Designed with creativity &amp; strategy.</span>
        </div>
        <p className="footer-credit">
          Built by{' '}
          <a href="https://chsgtech.com" target="_blank" rel="noopener noreferrer">
            CHSG Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
