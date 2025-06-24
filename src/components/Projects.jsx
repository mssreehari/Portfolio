import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ isDarkMode, projects, openModal }) => (
  <section id="projects" className={`p-3 p-md-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="container">
      <h2 className="text-center text-warning mb-4 mb-md-5">Featured Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <motion.div key={project.id} className="col-12 col-lg-8 mx-auto"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} whileHover={{ y: -10 }}>
            <div className={`card ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'} h-100 border-warning shadow-lg rounded-4`}>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text" style={{ textAlign: "justify", lineHeight: "1.6" }}>{project.description}</p>
                <div className="mb-3">
                  {project.technologies.map((tech, i) => (
                    <motion.span key={i} className="badge bg-warning text-dark me-2" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div className="d-flex gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">
                    <FaGithub className="me-2" /> Code
                  </a>
                  {project.screenshots && (
                    <button className="btn btn-outline-warning" onClick={() => openModal(project.screenshots)}>
                      Screenshots
                    </button>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
