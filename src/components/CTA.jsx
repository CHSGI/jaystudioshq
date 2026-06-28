import { Link } from 'react-router-dom';
import Reveal from './Reveal';

function ActionLink({ to, className, children }) {
  if (to.startsWith('http') || to.startsWith('tel:')) {
    return (
      <a href={to} className={className} {...(to.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return <Link to={to} className={className}>{children}</Link>;
}

export default function CTA({
  title = 'Ready to Elevate Your Brand?',
  description = "Let's create something remarkable together. Whether you need design, content creation, production, or digital media support, Jay Studios is ready to help.",
  primaryLabel = 'Book a Consultation',
  secondaryLabel = 'Contact Us Today',
  primaryTo = '/contact',
  secondaryTo = '/contact',
}) {
  return (
    <section className="cta">
      <Reveal className="container scale-in" animation="scale-in">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="cta-actions">
          <ActionLink to={primaryTo} className="btn btn-white">{primaryLabel}</ActionLink>
          <ActionLink to={secondaryTo} className="btn btn-outline">{secondaryLabel}</ActionLink>
        </div>
      </Reveal>
    </section>
  );
}
