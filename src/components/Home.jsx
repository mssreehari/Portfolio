import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaFileAlt } from "react-icons/fa";

const profilePhoto = "/assets/IMG_3664.JPG";
const resume = "/assets/SREEHARI.pdf";

const Home = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className="d-flex flex-column flex-lg-row justify-content-center align-items-center min-vh-100 py-5"
      style={{marginTop: "-80px",columnGap:"100px"}}
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
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
            background: "linear-gradient(45deg, #1F2833, #2C3E50)",
             transform: "translateX(0px)"
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
        <h1 className="display-4 fw-bold text-warning mb-4" >
          Hey!! I'm, Sreehari
        </h1>
        <p
          className="fs-5 mb-4"
          style={{ color: isDarkMode ? "#fff" : "#000" }}
        >
         I’m a  Web Developer,Data Science Engineer and UI/UX designer who builds  responsive, user-friendly websites and web applications and models.
        </p>

        <div className="d-flex flex-column align-items-center align-items-lg-start gap-4">
          <div className="d-flex gap-4">
            <IconLink
              href="https://github.com/mssreehari"
              icon={<FaGithub />}
            />
            <IconLink
              href="https://linkedin.com/in/m-s-sreehari-131a0b254"
              icon={<FaLinkedin />}
            />
            <IconLink
              href="https://instagram.com/ssreehariiii"
              icon={<FaInstagram />}
            />
          </div>
          <motion.a
            href={resume}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="btn btn-dark btn-lg rounded-pill flex-column"
            style={{ fontSize: "1rem", border: "2px solid #FFD700" }}
          >
            <div style={{ objectFit: "cover" }}>Resume</div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

const IconLink = ({ href, icon }) => (
  <motion.a
    href={href}
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
      border: "2px solid #FFD700",
    }}
  >
    {icon}
  </motion.a>
);

export default Home;
