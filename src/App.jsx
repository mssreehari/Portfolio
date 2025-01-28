import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import profilePhoto from "./assets/IMG_3664~2.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaFileAlt, FaSun, FaMoon } from 'react-icons/fa';
import resume from "./assets/M-S-SREEHARI (5).pdf";



const projects = [
  {
    id: 1,
    title: "Hagana",
    description: "Hagana is a mobile app focused on combating substance abuse through education, prevention, and community support. Designed to embody 'protection' and empowerment, it offers an intuitive space for resources, tools, and services. The clean, modern UI/UX prioritizes accessibility, engagement, and a sense of community.",
    technologies: ["Flutter"],
    githubLink: "https://github.com/mssreehari/Hagana-HACK-A-ADDICT",
    liveDemo: "https://github.com/mssreehari/Hagana-HACK-A-ADDICT"

    
  },
  {
    id: 2,
    title: "Library Management System",
    description: "The Library Management System is a comprehensive web application designed to streamline the management of a library's resources and activities. It provides a user-friendly interface for librarians to efficiently manage books, users, and transactions, while offering features for patrons to add, borrow, and return books.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    githubLink: "https://github.com/mssreehari/DBMS-project-library-management",
    liveDemo: "https://github.com/mssreehari/DBMS-project-library-management" 
  },
  {
    id: 3,
    title: "Quiz-App",
    description: "A Basic Quiz App created using ReactJS at the end it displays teh total score of the user",
    technologies: ["React"],
    githubLink: "https://github.com/mssreehari/react-quiz-app",
    liveDemo: "https://github.com/mssreehari/react-quiz-app" 
  },
  {
    id: 4,
    title: "Netflix Landing Page",
    description: "Netflix Landing Home Page created using HTML and CSS",
    technologies: ["HTML","CSS"],
    githubLink: "https://github.com/mssreehari/NETFLIX-CLONE",
    liveDemo: "https://mssreehari.github.io/NETFLIX-CLONE/" 
  },
  {
    id: 5,
    title: "Amazon Landing Page",
    description: "Amazon Landing Home Page created using HTML and CSS",
    technologies: ["HTML","CSS"],
    githubLink: "https://github.com/mssreehari/AMAZON-CLONE",
    liveDemo: "https://mssreehari.github.io/AMAZON-CLONE/" 
  },
];

const skills = [
  {
    id: 1,
    title: "ReactJs",
  },
  {
    id: 2,
    title: "NodeJs",
  },
  {
    id: 3,
    title: "ExpressJs",
  },
  {
    id: 4,
    title: "MongoDB",
  },
  {
    id: 5,
    title: "MySQL",
  },
  {
    id: 6,
    title: "Flutter",
  },
  {
    id: 7,
    title: "HTML",
  },
  {
    id: 8,
    title: "CSS",
  },
  {
    id: 9,
    title: "JavaScript",
  },
  {
    id: 10,
    title: "Python",
  },
  {
    id: 11,
    title: "C",
  },
  {
    id: 12,
    title: "Figma",
  },
]

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-dark' : 'bg-light'} min-vh-100`}
    style={{
      backgroundColor: isDarkMode ? "#1F2833" : "#ffffff"
    }}>
      <header className="d-flex justify-content-between align-items-center p-4" 
      style={{
        marginLeft: "100px",
      }}>
        <h1 className={`${isDarkMode ? 'text-warning' : 'text-dark'}`} style={{ 
          fontSize: "1.5rem", 
          fontWeight: "300",
          letterSpacing: "1px"
        }}>
          M S Sreehari.
        </h1>

        {/* Add Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className={`btn ${isDarkMode ? 'btn-outline-warning' : 'btn-outline-dark'} rounded-circle me-3`}
          whileHover={{ scale: 1.1 }}
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            right: "20px",
            top: "20px",
            zIndex: 1000
          }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </motion.button>

        {/* Update Navigation */}
        <nav className="d-flex font-weight-light justify-content-between align-items-center p-4 gap-4 ms-auto"
        style={{
          marginRight: "150px",
          fontSize: "20px",
          gap: "3rem",
        }}>
          {[
            { label: "Home", href: "#home" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className={`text-decoration-none ${isDarkMode ? 'text-light' : 'text-dark'} px-3 nav-link-underline`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </header>

      <section id="home" className="d-flex flex-column flex-lg-row justify-content-center align-items-center min-vh-100 py-5">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 mb-lg-0"
        >
          <div
            className="position-relative mx-auto"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #FFD700",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              background: "linear-gradient(45deg, #1F2833, #2C3E50)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="img-fluid position-relative"
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transform: "scale(1.1)",
                transition: "transform 0.3s ease" 
              }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-lg-start px-3 px-lg-5"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-4 fw-bold text-warning mb-4">
            Hey!! I'm,Sreehari
          </h1>
          <p className="fs-5 mb-4"
          style={{
            color: isDarkMode ? "#ffffff" : "#000000"
          }}>
            Hi, I'm M S Sreehari, a dedicated third-year B.Tech student in Computer Science and Engineering. I'm an aspiring full-stack web developer, currently building my skills in the MERN stack. My strongest area is React, where I enjoy crafting dynamic and interactive user interfaces.
          </p>
          
          <div className="d-flex flex-column align-items-center align-items-lg-start gap-4">
            <div className="d-flex gap-4">
              <motion.a
                href="https://github.com/mssreehari"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="btn btn-dark btn-lg rounded-circle"
                style={{ 
                  width: "60px", 
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  border: "2px solid #FFD700"
                }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/m-s-sreehari-131a0b254"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="btn btn-dark btn-lg rounded-circle"
                style={{ 
                  width: "60px", 
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  border: "2px solid #FFD700"
                }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://instagram.com/ssreehariiii"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="btn btn-dark btn-lg rounded-circle"
                style={{ 
                  width: "60px", 
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  border: "2px solid #FFD700"
                }}
              >
                <FaInstagram />
              </motion.a>
            </div>
            
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="btn btn-dark btn-lg rounded-pill flex-column"
              style={{ 
                width: "150px", 
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                border: "2px solid #FFD700",
                marginTop: "1rem"
              }}
            >
              
              <FaFileAlt />
              <div className="d-flex align-items-center" 
              style={{
                fontSize: "0.75rem",
              }}>Download Resume</div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      <section id="skills" className={`p-3 p-md-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h2 className="text-center text-warning mb-4 mb-md-5">Skills</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 g-md-4">
            {skills.map((skill) => (
              <motion.div 
                key={skill.id} 
                className="col"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`card ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'} border-warning text-center`}>
                  <div className="card-body">
                    <h5 className="card-title m-0">{skill.title}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className={`p-3 p-md-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h2 className="text-center text-warning mb-4 mb-md-5">Featured Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="col-12 col-lg-8 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={`card ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'} h-100 border-warning`}>
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text" 
                    style={{
                      textAlign: "justify",
                      lineHeight: "1.6"
                    }}>{project.description}</p>
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="badge bg-warning text-dark me-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div 
                      className="d-flex gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-warning"
                      >
                        <FaGithub className="me-2" />
                        Code
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="p-3 p-md-5 ${isDarkMode ? 'bg-dark' : 'bg-light'} ">
        <motion.div className="container">
          <h2 className="text-center text-warning mb-4 mb-md-5">Contact Me</h2>
          <div className="text-center">
            <p className="text-light fs-5"
            style={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
            >
               <a 
                href="mailto:sreeharimanezhath@gmail.com" 
                className="text-warning text-decoration-none"
                style={{ 
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease",
                  borderBottom: "1px solid transparent",
                }}
                onMouseOver={(e) => e.target.style.borderBottom = "1px solid #ffc107"}
                onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}
              >
                Email
              </a>
            </p>
            
            <p className="text-light fs-5"
            style={{
              fontSize: "1.0rem",
            }}
            >
              <a 
                href="https://linkedin.com/in/m-s-sreehari-131a0b254" 
                className="text-warning text-decoration-none"
                style={{ 
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease",
                  borderBottom: "1px solid transparent",
                }}
                onMouseOver={(e) => e.target.style.borderBottom = "1px solid #ffc107"}
                onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}
              >
                Linkedin
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
