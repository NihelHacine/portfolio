
import React from 'react';
import '../About.css';
import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    <section className="about-section" id="about">

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="about-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <strong>Me</strong></h2>
          <div className="heading-line"></div>
        </div>
      </Fade>

      <div className="about-container">

        {/* Profile Image */}
        <Fade direction="left" duration={1200} triggerOnce>
          <div className="about-image">
            <div className="image-glow"></div>
            <img
              src={process.env.PUBLIC_URL + "/nihel.png"}
              alt="Nihel Hacine"
            />
            <div className="image-badge">
              <span>💻</span>
              <div>
                <strong>Full Stack</strong>
                <small>Web Developer</small>
              </div>
            </div>
          </div>
        </Fade>

        {/* About Description */}
        <Fade direction="right" duration={1200} triggerOnce>
          <div className="about-content">

            <span className="about-label">WHO AM I?</span>

            <h3>
              Building Digital Experiences
              <span> With Passion.</span>
            </h3>

            <p className="about-description">
              Hello! I'm Nihel Hacine, a passionate Full Stack Web
              Developer interested in creating modern, responsive
              and user-friendly web applications.

              <br /><br />

              I enjoy transforming ideas into functional digital
              solutions using technologies such as React, Node.js,
              Express and MongoDB.

              <br /><br />

              I am always motivated to learn new technologies,
              improve my skills and take on new challenges.
            </p>

            {/* Skills */}
            <div className="about-skills">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>

            {/* Contact Information */}
            <div className="about-contact">
              <h4>Let's Connect</h4>

              <div className="contact-grid">

                <a href="mailto:nihelhacine@gmail.com">
                  <span>✉</span>
                  nihelhacine@gmail.com
                </a>

                <a href="tel:+2162465552">
                  <span>☎</span>
                  +216 22 809 629
                </a>

                <a
                  href="https://www.linkedin.com/in/nihel-hacine-5456b919a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>in</span>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/NihelHacine"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>⌘</span>
                  GitHub
                </a>

              </div>
            </div>

          </div>
        </Fade>

      </div>
    </section>
  );
}

export default About;
