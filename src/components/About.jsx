// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const About = ({ isDarkMode }) => {
  const educationData = [
    {
      year: '2022 - 2025',
      title: 'B.Tech in Computer Science',
      institution: 'Toc H Institute of Science and Technology',
      description: 'CGPA: 7.6',
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary Education',
      institution: 'St Sebastian’s Higher Secondary School',
      description: 'Percentage: 96%',
    },
    {
      year: '2010 - 2020',
      title: 'School Education',
      institution: 'Saraswathi Vidyalaya',
      description: 'Percentage: 89%',
    },
  ];

  return (
    <section
      id="about"
      className={`${styles.aboutSection} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heading}
        
      >
        About Me
        
      
        
      </motion.h1>
      <div className={styles.underline} style={{marginTop:'-50px'}}></div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.description}
      >
        I'm a <strong>Full-Stack Developer</strong> and <strong>Flutter App Developer</strong> who builds fast, accessible, and beautiful digital experiences across web and mobile platforms.
        I specialize in creating full-stack solutions using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), crafting scalable APIs, and deploying modern web apps with seamless user interfaces.
        On the mobile side, I build robust, high-performance apps using <strong>Flutter</strong>, ensuring cross-platform compatibility and a native-like experience.
        I’m passionate about combining elegant UI/UX design with powerful backend logic, and I believe in writing clean, maintainable code that solves real-world problems.
        Tools I frequently use include <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, <strong>Git/GitHub</strong>, <strong>Figma</strong>, and <strong>Postman</strong>. I'm continuously learning and experimenting with new technologies to stay ahead in the ever-evolving tech space.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className={`${styles.educationCard} ${isDarkMode ? styles.darkCard : styles.lightCard}`}
      >
        <div className={styles.educationHeader}>
          <h2 className={styles.educationTitle}>Education Journey</h2>
          <div className={styles.underline}></div>
        </div>

        <ul className={styles.educationList}>
          {educationData.map((edu, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className={styles.educationItem}
            >
              <div className={styles.bulletRow}>
               
                <h5 className={styles.itemTitle}>{edu.title}</h5>
              </div>
              <p className={styles.itemSubtitle}>
                {edu.institution} — <span>{edu.year}</span>
              </p>
              <p>{edu.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
