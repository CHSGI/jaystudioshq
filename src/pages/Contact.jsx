import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { serviceOptions, budgetOptions } from '../data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <PageHero
        title="Let's Bring Your Vision to Life"
        description="Whether you need graphic design, motion graphics, photography, videography, production, or social media management, we're ready to help."
        breadcrumb="Contact"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <Reveal className="contact-info" animation="fade-left">
              <h2>Get In Touch</h2>
              <p>Tell us about your project, and our team will get back to you as soon as possible.</p>

              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+2348129498476">+234 812 949 8476</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Akure, Ondo State, Nigeria</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📱</div>
                <div>
                  <h4>Social Media</h4>
                  <a href="https://instagram.com/itz_jaystudios" target="_blank" rel="noopener noreferrer">
                    Instagram: @itz_jaystudios
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">✓</div>
                <div>
                  <h4>Why Contact Jay Studios?</h4>
                  <p>Professional creative solutions, fast response time, tailored project approach, dedicated client support, and high-quality deliverables.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="contact-form" animation="fade-right">
              <h3>Send Us a Message</h3>
              <p>Have a project in mind? Fill out the form below and let's start the conversation.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Brand Name</label>
                    <input type="text" id="company" name="company" placeholder="Optional" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" defaultValue="" required>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>Select budget range</option>
                      {budgetOptions.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="details">Project Details</label>
                  <textarea
                    id="details"
                    name="details"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="start-date">Preferred Start Date</label>
                  <input type="date" id="start-date" name="start-date" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', ...(submitted ? { background: '#22c55e' } : {}) }}
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        primaryLabel="Call Us Now"
        secondaryLabel="Follow on Instagram"
        primaryTo="tel:+2348129498476"
        secondaryTo="https://instagram.com/itz_jaystudios"
      />
    </>
  );
}
