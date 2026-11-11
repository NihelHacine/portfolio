
import React from 'react';
import '../Footer.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Nihel<span>Hacine</span>
          </h2>

          <p>
            Full Stack Web Developer passionate about
            creating modern and responsive web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#certif">Qualifications</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect With Me</h3>

          <a
            href="https://www.linkedin.com/in/nihel-hacine-5456b919a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/NihelHacine"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:nihelhacine@gmail.com">
            Email ↗
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} <strong>Nihel Hacine</strong>.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed with
          <span className="footer-heart"> ♥ </span>
          by Nihel Hacine
        </p>
      </div>

    </footer>
  );
}

export default Footer;
