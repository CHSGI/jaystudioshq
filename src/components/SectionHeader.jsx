import Reveal from './Reveal';

export default function SectionHeader({ label, title, description, className = '' }) {
  return (
    <Reveal className={`section-header blur-in ${className}`.trim()} animation="blur-in">
      {label && <span className="section-label">{label}</span>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </Reveal>
  );
}
