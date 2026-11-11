
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact.css';
import { Fade } from 'react-awesome-reveal';

function Contact() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        'service_m1xgcts',
        'template_iu48foc',
        e.target,
        'eyFPWO8020fwHk93G'
      );

      setStatus('success');
      e.target.reset();

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">

      {/* Heading */}
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>Contact <strong>Me</strong></h2>
          <div className="contact-line"></div>
          <p>
            Have a project in mind or want to work together?
            Feel free to contact me!
          </p>
        </div>
      </Fade>

      <div className="contact-container">

        {/* Left Side */}
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="contact-info">

            <span className="contact-label">LET'S TALK</span>

            <h3>
              Let's Work
              <span> Together.</span>
            </h3>

            <p className="contact-description">
              I'm always open to discussing new projects,
              creative ideas or opportunities to be part
              of your vision.
            </p>

            <div className="contact-details">

              <a href="mailto:nihelhacine.pro@gmail.com"
                 className="contact-detail">
                <span className="contact-icon">✉</span>
                <div>
                  <small>Email Me</small>
                  <strong>nihelhacine.pro@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+21624659552"
                 className="contact-detail">
                <span className="contact-icon">☎</span>
                <div>
                  <small>Call Me</small>
                  <strong>+216 24 659 552</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nihel-hacine-5456b919a/"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <span className="contact-icon">in</span>
                <div>
                  <small>LinkedIn</small>
                  <strong>Nihel Hacine</strong>
                </div>
              </a>

              <a
                href="https://github.com/NihelHacine"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <span className="contact-icon">⌘</span>
                <div>
                  <small>GitHub</small>
                  <strong>Nihel Hacine</strong>
                </div>
              </a>

            </div>

            <div className="contact-availability">
              <span></span>
              Available for new opportunities
            </div>

          </div>
        </Fade>

        {/* Right Side - Form */}
        <Fade direction="right" duration={1000} triggerOnce>
          <div className="contact-form-container">

            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={sendEmail} className="contact-form">

              <div className="form-group">
                <label htmlFor="formName">Your Name</label>
                <input
                  type="text"
                  id="formName"
                  name="formName"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formEmail">Your Email</label>
                <input
                  type="email"
                  id="formEmail"
                  name="formEmail"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formSubject">Subject</label>
                <input
                  type="text"
                  id="formSubject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formMessage">Your Message</label>
                <textarea
                  id="formMessage"
                  name="formMessage"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {status === 'success' && (
                <p className="form-success">
                  ✓ Your message has been sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <span>➤</span>}
              </button>

            </form>

          </div>
        </Fade>

      </div>

    </section>
  );
}

export default Contact;
