import React, { useState } from "react";
import "../Navbarr.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbarr() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        <span>Nihel</span>Hacine
      </a>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#certif" onClick={closeMenu}>
            Qualifications
          </a>
        </li>

        <li>
          <a href="#portfolio" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

      </ul>

      <a href="cv.pdf" className="cv-btn">
        Download CV
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
}

export default Navbarr;