import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import SectionHeader from '../components/SectionHeader';
import CTA from '../components/CTA';
import { heroTags, homeServices, whyChoose, processSteps, stats } from '../data/content';

export default function Home() {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;

    const onScroll = () => {
      if (window.scrollY < window.innerHeight) {
        img.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Creative Multimedia Agency</div>
            <h1>We Bring Brands to Life Through <span>Creative Media</span></h1>
            <p className="hero-desc">
              From strategy to execution, Jay Studios helps businesses, organizations, and individuals stand out with compelling visuals, engaging content, and powerful digital experiences.
            </p>
            <div className="hero-tags">
              {heroTags.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Start a Project</Link>
              <Link to="/portfolio" className="btn btn-outline">View Our Portfolio</Link>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img ref={heroImgRef} src="/logo.png" alt="Jay Studios Logo" />
        </div>
      </header>

      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-visual" animation="fade-right">
              <div className="about-image-wrap">
                <img src="/logo.png" alt="Jay Studios" />
              </div>
              <div className="about-accent" />
              <div className="about-stats">
                {stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} />
                ))}
              </div>
            </Reveal>
            <Reveal className="about-content" animation="fade-left">
              <span className="section-label">About Jay Studios</span>
              <h2>Creativity Meets Strategy</h2>
              <p>At Jay Studios, creativity meets strategy. We are a multimedia agency dedicated to helping brands communicate effectively through design, visual storytelling, and digital media.</p>
              <p>Whether you're launching a new business, growing an existing brand, or promoting an event, our team creates content and experiences that capture attention, build trust, and drive results.</p>
              <Link to="/about" className="btn btn-outline-dark" style={{ marginTop: 24 }}>Learn More</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="Comprehensive creative solutions designed to help your brand grow, engage, and succeed."
          />
          <div className="services-grid">
            {homeServices.map((service, i) => (
              <Reveal key={service.title} className="service-card" animation="scale-in" delay={i + 1}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <SectionHeader label="Why Us" title="Why Choose Jay Studios?" />
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <Reveal
                key={item.title}
                className="why-card"
                animation={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={i + 1}
              >
                <div className="why-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <SectionHeader
            label="How We Work"
            title="Our Process"
            description="Every successful project begins with understanding your vision."
          />
          <Reveal className="process-steps" animation="fade-up">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} className="process-step" animation="fade-up" delay={i + 1}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
