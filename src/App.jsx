import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import profilePhoto from "./assets/IMG_3664~2.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaFileAlt } from 'react-icons/fa';
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
  return (
    <div className="bg-dark text-white"
    style={{
      backgroundColor: "#1F2833"
    }}
    >
      <header className="d-flex justify-content-between align-items-center p-4" 
      style={{
        marginLeft: "100px",
      }}>
  <h1 className="text-warning" style={{ 
    fontSize: "1.5rem", 
    fontWeight: "300",
    letterSpacing: "1px"
  }}>
    M S Sreehari.
  </h1>
  <nav className="d-flex font-weight-light justify-content-between align-items-center p-4 gap-4 ms-auto "
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
        className="text-decoration-none text-light px-3"
      >
        {link.label}
      </motion.a>
      
    ))}
  </nav>
</header>

<section id="home" className="d-flex flex-row justify-content-between align-items-center vh-100">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mt-5"
        >
        <div
            className="position-relative"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              marginLeft: "150px",
              marginTop: "-100px",
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
          className="text-center mb-5"
        >
          <h1 className="display-3 fw-bold text-warning position-relative"
          style={{
            marginRight: "100px",
            marginLeft: "200px",
            fontSize: "2.5rem",
            fontWeight: "300",
            letterSpacing: "1px"
          }}>Hey!! I'm,Sreehari</h1>
          <p className="mt-3 text-light fs-5 position-relative"
          style={{
            marginRight: "100px",
            marginLeft: "200px",
            maxWidth: "800px",
            lineHeight: "1.8",
            fontSize: "1.5rem",
            fontWeight: "300",
            letterSpacing: "1px"
          }}>
            Hi, I'm M S Sreehari, a dedicated third-year B.Tech student in Computer Science and Engineering. I'm an aspiring full-stack web developer, currently building my skills in the MERN stack. My strongest area is React, where I enjoy crafting dynamic and interactive user interfaces.
            
          </p>
          
          <div className="d-flex gap-4 justify-content-center position-relative flex-column align-items-center"
          style={{
            marginRight: "100px",
            marginLeft: "200px",
            marginTop: "3rem"
          }}>
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

      <section id="skills" className="p-5 bg-dark">
        <motion.div
          initial={{opacity:0 ,y:50}}
          whileInView={{opacity:1 ,y:0}}
          viewport={{once:true}}
          transition={{duration:1}}
          className="container"
        >
          <h2 className="text-center text-warning mb-5">Skills</h2>
          <div className="row row-cols-2 row-cols-4 g-4">
            {skills.map((skill) => (
              <motion.div 
                key={skill.id} 
                className="col"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card bg-dark text-light border-warning text-center">
                  <div className="card-body">
                    <h5 className="card-title m-0">{skill.title}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="p-5 bg-dark">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h2 className="text-center text-warning mb-5">Featured Projects</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="col-12 col-md-8 mx-auto"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card bg-dark text-light h-100 border-warning">
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text" 
                    style={{
                      textAlign: "justify",
                      lineHeight: "1.6"
                    }}
                    >{project.description}</p>
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="badge bg-warning text-dark me-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-3">
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-warning"
                      >
                        <FaGithub className="me-2" />
                        Code
                      </a>
                      
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="p-5 bg-dark">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h2 className="text-center text-warning mb-5">Contact Me</h2>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
