import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { portfolioFilters, portfolioItems, portfolioCategories, testimonials } from '../data/content';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animKey, setAnimKey] = useState(0);

  const filtered = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleFilter = (id) => {
    setActiveFilter(id);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <PageHero
        title="Our Portfolio"
        description="Showcasing creativity, excellence, and impact. Every project tells a story."
        breadcrumb="Portfolio"
      />

      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <Reveal className="section-header" animation="fade-up" style={{ marginBottom: 40 }}>
            <p>From branding and design to photography, videography, and digital content creation, our portfolio reflects our commitment to quality, innovation, and excellence.</p>
          </Reveal>

          <Reveal className="portfolio-filters" animation="fade-up">
            {portfolioFilters.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`filter-btn${activeFilter === id ? ' active' : ''}`}
                onClick={() => handleFilter(id)}
              >
                {label}
              </button>
            ))}
          </Reveal>

          <div className="portfolio-grid" key={animKey}>
            {filtered.map((item, i) => (
              <Reveal
                key={`${item.title}-${animKey}`}
                className="portfolio-item"
                animation="scale-in"
                delay={Math.min(i + 1, 6)}
              >
                <div className="portfolio-item-bg" style={{ background: item.gradient }}>
                  <span className="placeholder-icon">{item.icon}</span>
                </div>
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <span>{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-category">
        <div className="container">
          {portfolioCategories.map((cat, i) => (
            <Reveal key={cat.title} className="category-block" animation="fade-up" delay={i + 1}>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <SectionHeader label="Testimonials" title="What Our Clients Say" />
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="testimonial-card" animation="fade-up" delay={i + 1}>
                <p>{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's Create Your Next Success Story"
        description="Whether you're launching a brand, promoting a product, documenting an event, or growing your online presence, Jay Studios is ready to help bring your vision to life."
        primaryLabel="Get Started"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
