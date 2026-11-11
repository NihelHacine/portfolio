import React from "react";
import "../Header.css";
import { Fade } from "react-awesome-reveal";
import { FaDownload, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <div className="hero-content">

        <Fade direction="left" triggerOnce>

          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1 className="hero-name">
            Nihel Hacine
          </h1>

          <h2 className="hero-job">
            Full Stack Web Developer
          </h2>

          <p className="hero-description">
            Passionate about building modern, scalable and responsive web
            applications using React, Node.js, Express and MongoDB.
          </p>

          <div className="tech-stack">

            <span>⚛ React</span>

            <span>🟢 Node.js</span>

            <span>🚀 Express</span>

            <span>🍃 MongoDB</span>

            <span>💻 JavaScript</span>

          </div>

          <div className="hero-buttons">

            <a href="#contact" className="primary-btn">
              <FaEnvelope />
              Contact Me
            </a>

            <a href="cv.pdf" className="secondary-btn">
              <FaDownload />
              Download CV
            </a>

          </div>

        </Fade>

      </div>

      <Fade direction="right" triggerOnce>

        <div className="hero-image">

          <div className="glow"></div>

          <img
          src={process.env.PUBLIC_URL + "/ni2.jpeg"}
          alt="Nihel Hacine"
          width="300"
      />

        </div>

      </Fade>

    </header>
  );
}

export default Header;