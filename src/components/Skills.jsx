import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './skills.module.css';

const Skills = ({ isDarkMode, skills }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    'Frontend': ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Vue.js'],
    'Backend': ['NodeJs', 'Python', 'Java', 'PHP', 'ExpressJs'],
    'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    'Tools': ['Git', 'AWS', 'Linux', 'Figma']
  };

  const enhancedSkills = skills?.map(skill => ({
    ...skill,
    category: getCategoryForSkill(skill.title),
  })) || [];

  function getCategoryForSkill(skillName) {
    for (const [category, categorySkills] of Object.entries(skillCategories)) {
      if (categorySkills.includes(skillName)) return category;
    }
    return 'Tools';
  }

  const filteredSkills = activeCategory === 'all'
    ? enhancedSkills
    : enhancedSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={`py-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className={`display-6 fw-bold mb-3 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
            Skills
          </h2>
          <div className="mx-auto mb-3" style={{ width: '60px', height: '3px', background: '#ffc107' }}></div>
        </motion.div>

        {/* Category Filters */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button
            className={`btn rounded-pill px-4 py-2 fw-semibold ${activeCategory === 'all'
              ? 'btn-warning text-dark'
              : isDarkMode ? 'btn-outline-warning' : 'btn-outline-secondary'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {Object.keys(skillCategories).map(category => (
            <button
              key={category}
              className={`btn rounded-pill px-4 py-2 fw-semibold ${activeCategory === category
                ? 'btn-warning text-dark'
                : isDarkMode ? 'btn-outline-warning' : 'btn-outline-secondary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillGrid}>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={styles.cardWrapper}
            >
              <div className={`${styles.card} ${isDarkMode ? styles.darkCard : styles.lightCard}`}>
                <div className={styles.cardIcon}>{skill.icon}</div>
                <div className={styles.cardTitle}>{skill.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
