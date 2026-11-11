
import React from 'react';
import '../Certif.css';
import { Fade } from 'react-awesome-reveal';

function Certif() {

  const certifications = [
    {
      date: 'August 2023',
      type: 'Professional Training',
      icon: '🎓',
      title: 'GOMYCODE',
      description:
        'GOMYCODERS Onboarding & Training: Welcoming, Teaching Philosophy, Learn and Teach.',
    },
    {
      date: 'July 2023',
      type: 'Web Development',
      icon: '💻',
      title: 'GOMYCODE',
      description:
        'Full Stack JavaScript Web Bootcamp: React.js, Node.js and Express.js.',
    },
    {
      date: 'May 2023',
      type: 'Digital Skills',
      icon: '🚀',
      title: 'INCO Academy / Minassa',
      description:
        'Go Into Tech Bootcamp: WordPress, SEO Audit, Digital Marketing and Web Design.',
    },
    {
      date: 'September 2020',
      type: 'Master Degree',
      icon: '🏆',
      title: 'Institut Supérieur de Gestion de Gabès',
      description:
        "Master's Degree in E-Commerce.",
    },
    {
      date: 'May 2016',
      type: "Bachelor's Degree",
      icon: '📚',
      title: 'Institut Supérieur de Gestion de Gabès',
      description:
        "Bachelor's Degree in Business Computing.",
    },
    {
      date: 'June 2013',
      type: 'Baccalaureate',
      icon: '🎯',
      title: 'Abouloubaba School',
      description:
        'Baccalaureate in Computer Science.',
    },
  ];

  return (
    <section className="certif-section" id="certif">

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="certif-heading">
          <span>MY JOURNEY</span>
          <h2>Certifications <strong>& Diplomas</strong></h2>
          <div className="certif-line"></div>
          <p>
            My academic background and professional training
            that shaped my technical skills.
          </p>
        </div>
      </Fade>

      <div className="certif-container">

        {certifications.map((certif, index) => (

          <Fade
            key={index}
            direction="up"
            delay={index * 100}
            duration={800}
            triggerOnce
          >
            <div className="certif-card">

              <div className="certif-card-top">
                <div className="certif-icon">
                  {certif.icon}
                </div>

                <span className="certif-date">
                  {certif.date}
                </span>
              </div>

              <span className="certif-type">
                {certif.type}
              </span>

              <h3>{certif.title}</h3>

              <p>{certif.description}</p>

              <div className="certif-card-footer">
                <span className="certif-dot"></span>
                <span>Completed</span>
              </div>

            </div>
          </Fade>

        ))}

      </div>

    </section>
  );
}

export default Certif;
