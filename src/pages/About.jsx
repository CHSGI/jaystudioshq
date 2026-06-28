import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { aboutChecklist, whyChoose, processSteps } from '../data/content';

export default function About() {
  return (
    <>
      <PageHero
        title="About Jay Studios"
        description="Transforming ideas into powerful visual experiences that inspire, engage, and drive results."
        breadcrumb="About Us"
      />

      <section className="about-full">
        <div className="container">
          <Reveal className="about-full-content" animation="fade-up">
            <p>Jay Studios is a creative multimedia agency dedicated to helping brands, businesses, and individuals communicate their stories through impactful visuals and strategic content. We combine creativity, innovation, and professionalism to deliver solutions that not only capture attention but also create meaningful connections with audiences.</p>
            <p>Our expertise spans graphic design, motion graphics, photography, videography, production, and social media management, allowing us to provide comprehensive creative services under one roof. Whether it's building a brand from scratch, creating engaging content, or producing high-quality media campaigns, we are committed to delivering excellence at every stage of the creative process.</p>
            <p>At Jay Studios, we believe that every brand has a unique story worth telling. Our mission is to transform ideas into powerful visual experiences that inspire, engage, and drive results. Through collaboration, creativity, and a passion for excellence, we help our clients stand out in an ever-evolving digital world.</p>

            <h3 style={{ marginTop: 48, marginBottom: 24, fontSize: '1.5rem' }}>Why Contact Jay Studios?</h3>
            <ul className="checklist">
              {aboutChecklist.map((item, i) => (
                <Reveal key={item} as="li" animation="fade-up" delay={i + 1}>{item}</Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <Reveal className="mission-card" animation="fade-left">
              <h3>Our Mission</h3>
              <p>To transform ideas into powerful visual experiences that inspire, engage, and drive results for every brand we work with.</p>
            </Reveal>
            <Reveal className="mission-card" animation="fade-right">
              <h3>Our Vision</h3>
              <p>To be the leading creative multimedia agency in Nigeria, known for excellence, innovation, and meaningful brand storytelling.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <SectionHeader label="Our Values" title="What Sets Us Apart" />
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} className="why-card" animation="fade-up" delay={i + 1}>
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
            title="Our Creative Process"
            description="Every successful project begins with understanding the client's vision."
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
