import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the project.',
      imageUrl: 'https://via.placeholder.com/300',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of the project.',
      imageUrl: 'https://via.placeholder.com/300',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of the project.',
      imageUrl: 'https://via.placeholder.com/300',
      demoUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__links">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;