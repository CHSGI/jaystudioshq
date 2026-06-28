import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { serviceDetails, whyWorkWithUs } from '../data/content';

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Creative solutions designed to help your brand grow, engage, and succeed."
        breadcrumb="Services"
      />

      <section className="about-full" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal className="about-full-content" animation="fade-up" style={{ textAlign: 'center' }}>
            <p>At Jay Studios, we provide a wide range of multimedia and digital services tailored to help businesses, organizations, and personal brands build a strong presence, engage their audience, and achieve their goals. Our team combines creativity, strategy, and technical expertise to deliver results-driven solutions that make an impact.</p>
          </Reveal>
        </div>
      </section>

      {serviceDetails.map((service) => (
        <section key={service.id} className="service-detail" id={service.id}>
          <div className="container">
            <Reveal className="service-detail-inner" animation="fade-up">
              <div>
                <div className="service-detail-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="offer-list">
                <h3>What We Offer</h3>
                <ul>
                  {service.offers.map((offer) => (
                    <li key={offer}>{offer}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="why-banner">
        <div className="container">
          <SectionHeader label="Why Us" title="Why Work With Jay Studios?" />
          <div className="why-banner-grid">
            {whyWorkWithUs.map((item, i) => (
              <Reveal key={item.title} className="why-banner-item" animation="scale-in" delay={i + 1}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's Create Something Extraordinary"
        description="Whether you're building a new brand, promoting a product, documenting an event, or growing your digital presence, Jay Studios is ready to help bring your vision to life."
        primaryLabel="Get Started"
      />
    </>
  );
}
