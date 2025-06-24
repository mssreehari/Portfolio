import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ isDarkMode, skills }) => (
  <section id="skills" className={`p-3 p-md-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="container">
      <h2 className="text-center text-warning mb-4 mb-md-5">Skills</h2>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 g-md-4">
        {skills.map(skill => (
          <motion.div key={skill.id} className="col" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
            <div className={`card ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'} border-warning text-center rounded-4 shadow-lg`}>
              <div className="card-body"><h5 className="card-title m-0">{skill.title}</h5></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
