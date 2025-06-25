import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ isDarkMode, skills }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Skill categories with friendly names
  const skillCategories = {
    'Frontend': ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Vue.js'],
    'Backend': ['NodeJs', 'Python', 'Java', 'PHP', 'ExpressJs'],
    'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    'Tools': ['Git', , 'AWS', 'Linux', 'Figma']
  };

  // Enhanced skills with simpler proficiency levels
  const enhancedSkills = skills?.map(skill => ({
    ...skill,
    category: getCategoryForSkill(skill.title),
    level: getSkillLevel(skill.title),
    
  })) || [];

  function getCategoryForSkill(skillName) {
    for (const [category, categorySkills] of Object.entries(skillCategories)) {
      if (categorySkills.includes(skillName)) {
        return category;
      }
    }
    return 'Tools';
  }

  function getSkillLevel(skillName) {
    const strongSkills = ['React', 'JavaScript', 'HTML', 'CSS'];
    const goodSkills = ['Node.js', 'Python', 'MySQL', 'Git'];
    
    if (strongSkills.includes(skillName)) return { text: 'Strong', stars: 4 };
    if (goodSkills.includes(skillName)) return { text: 'Good', stars: 3 };
    return { text: 'Learning', stars: 2 };
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
          <p className={`${isDarkMode ? 'text-light' : 'text-muted'} mx-auto`} style={{ maxWidth: '500px' }}>
            
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="d-flex justify-content-center flex-wrap gap-2 mb-5"
        >
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
        </motion.div>

        {/* Skills Grid */}
        <div className="row g-4 mb-5 border-color-warning">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="col-sm-6 col-lg-4 col-xl-3"
            >
              <SkillCard skill={skill} isDarkMode={isDarkMode} />
            </motion.div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
};

const SkillCard = ({ skill, isDarkMode }) => {
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'text-warning' : 'text-muted'}>
        ★
      </span>
    ));
  };

  return (
    <motion.div
      className={`card h-100 border-0 ${
        isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'
      }`}
      style={{ 
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        borderColor: isDarkMode ? '#ffc107' : '#6c757d'
      }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 8px 25px rgba(4, 3, 0, 0.2)'
      }}
    >
      <div className="card-body text-center p-4">
        {/* Icon */}
        <div className="mb-3" style={{ fontSize: '2.5rem' }}>
          {skill.icon}
        </div>

        {/* Skill name */}
        <h5 className={`card-title fw-bold mb-2 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
          {skill.title}
        </h5>

        

       </div>
    </motion.div>
  );
};

export default Skills;