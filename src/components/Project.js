
import React from 'react';
import '../Project.css';
import { Fade } from 'react-awesome-reveal';

function Project() {

  const projects = [
    {
      name: 'To Do List',
      category: 'Frontend Development',
      description:
        'A task management application allowing users to organize their daily activities using React and Redux for state management.',
      video: 'video2.mp4',
      technologies: ['React.js', 'Redux', 'JavaScript', 'CSS3'],
      number: '01',
    },
    {
      name: 'MovieApp',
      category: 'Frontend Development',
      description:
        'A movie application that allows users to search, add and update movies, with Redux for efficient state management.',
      video: 'video1.mp4',
      technologies: ['React.js', 'Redux', 'JavaScript'],
      number: '02',
    },
    {
      name: 'Tacapes Mall',
      category: 'Full Stack Development',
      description:
        'A full-stack e-commerce platform connecting customers with shops in Gabès, allowing users to explore and purchase products online.',
      video: 'video4.mp4',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      number: '03',
    },
    {
      name: 'SGPA',
      category: 'Web Development',
      description:
        'An e-commerce website dedicated to pastry products, developed to provide an online shopping experience.',
      video: 'video3.mp4',
      technologies: ['HTML5', 'CSS3', 'PHP'],
      number: '04',
    },
  ];

  return (
    <section className="project-section" id="portfolio">

      {/* Heading */}
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="project-heading">
          <span>MY RECENT WORK</span>

          <h2>
            My <strong>Projects</strong>
          </h2>

          <div className="project-line"></div>

          <p>
            Explore some of the projects I have developed
            using different web technologies.
          </p>
        </div>
      </Fade>

      {/* Projects */}
      <div className="projects-container">

        {projects.map((project, index) => (

          <Fade
            key={project.number}
            direction="up"
            delay={index * 150}
            duration={900}
            triggerOnce
          >
            <article className="project-card">

              {/* Video */}
              <div className="project-video-container">

                <span className="project-number">
                  {project.number}
                </span>

                <video
                  className="project-video"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source
                    src={process.env.PUBLIC_URL + '/' + project.video}
                    type="video/mp4"
                  />
                  Your browser does not support video playback.
                </video>

              </div>

              {/* Content */}
              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>
                    <span className="project-status-dot"></span>
                    Personal Project
                  </span>

                  <span className="project-arrow">↗</span>
                </div>

              </div>

            </article>
          </Fade>

        ))}

      </div>

    </section>
  );
}

export default Project;
