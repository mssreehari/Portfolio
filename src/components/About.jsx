import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ isDarkMode }) => {
  const educationData = [
    {
      year: '2022 - 2025',
      title: 'B.Tech in Computer Science',
      institution: 'Toc H Institute of Science and Technology',
      description: 'Specialized in web development, AI, and modern software engineering practices.',
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary Education',
      institution: 'Kerala State Board',
      description: 'Focused on Computer Science with core subjects including Math, Physics, and Chemistry.',
    },
    {
      year: '2010 - 2020',
      title: 'School Education',
      institution: 'CBSE Curriculum',
      description: 'Strong academic base in sciences, logical reasoning, and computer basics.',
    },
  ];

  return (
    <section
  id="about"
  className={`w-full min-h-screen px-4 md:px-10 py-20 flex flex-col items-center justify-center gap-16 ${
    isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-[#f9f9f9] text-black'
  }`}
>
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold text-yellow-400 text-center"
    style={{color: isDarkMode ? '#facc15' : 'black'}}
  >
    About Me
  </motion.h1>

  {/* Description */}
<motion.p
  className="max-w-5xl text-xl leading-relaxed text-justify sm:text-lg md:text-xl max-w-5xl mx-auto px-4 sm:px-6 md:px-20"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  style={{marginLeft:'200px',marginRight:'200px',textAlign:'justify'}}
>
  I'm a <strong>Full-Stack Developer</strong> and <strong>Flutter App Developer</strong> who builds fast, accessible, and beautiful digital experiences across web and mobile platforms. 
  I specialize in creating full-stack solutions using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), crafting scalable APIs, and deploying modern web apps with seamless user interfaces.
  On the mobile side, I build robust, high-performance apps using <strong>Flutter</strong>, ensuring cross-platform compatibility and a native-like experience.
  I’m passionate about combining elegant UI/UX design with powerful backend logic, and I believe in writing clean, maintainable code that solves real-world problems.
  Tools I frequently use include <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, <strong>Git/GitHub</strong>, <strong>Figma</strong>, and <strong>Postman</strong>. I'm continuously learning and experimenting with new technologies to stay ahead in the ever-evolving tech space.
</motion.p>


  {/* Education Container Card */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    className={`w-full max-w-6xl rounded-2xl border-2 p-8 md:p-12 ${
      isDarkMode 
        ? 'bg-[#1a1a1a] border-yellow-400 shadow-2xl shadow-yellow-400/10' 
        : 'bg-light border-yellow-500 shadow-2xl shadow-gray-300/20'
    }`}
    style={{borderRadius:'200px'}}
  >
    {/* Education Header */}
    <div className="mb-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-yellow-400 text-center"
        style={{ marginTop: '30px',color: isDarkMode ? '#facc15' : 'black',marginBottom: '80px' }}
      >
        Education Journey
      </h2>
      <div
        className={`w-20 h-1 rounded-full mx-auto ${
          isDarkMode ? 'bg-yellow-400' : 'bg-yellow-500'
        }`}
      ></div>
    </div>

    {/* Education Timeline */}
 <ul className="d-flex flex-column align-items-center justify-content-center w-100 px-3">
  {educationData.map((edu, idx) => (
    <motion.li
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.15 }}
      className="mb-5"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '700px',
        width: '100%',
        textAlign: 'left',
        color: isDarkMode ? '#fff' : '#000',
      }}
    >
      {/* Bullet + Title */}
      <div className="d-flex align-items-center mb-2">
        <span
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#facc15', // yellow bullet
            borderRadius: '50%',
            marginRight: '12px',
            flexShrink: 0,
          }}
        ></span>
        <h5
          className="fw-bold mb-0"
          style={{ color: '#facc15' }}
        >
          {edu.title}
        </h5>
      </div>

      {/* Institution + Year */}
      <p
        className="mb-2 fst-italic"
        style={{ color: isDarkMode ? '#facc15' : '#333' }}
      >
        {edu.institution} — <span className="fw-normal">{edu.year}</span>
      </p>

      {/* Description */}
      <p style={{ lineHeight: '1.6' }}>
        {edu.description}
      </p>
    </motion.li>
  ))}
</ul>



  </motion.div>
</section>

  );
};

export default AboutSection;