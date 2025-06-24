import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => (
  <section id="contact" className={`p-3 p-md-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
    <motion.div className="container">
      <h2 className="text-center text-warning mb-4 mb-md-5">Contact Me</h2>
      <div className="text-center">
        <ContactLink label="Email" href="mailto:sreeharimanezhath@gmail.com" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/m-s-sreehari-131a0b254" />
      </div>
    </motion.div>
  </section>
);

const ContactLink = ({ label, href }) => (
  <p className="text-light fs-5">
    <a href={href} className="text-warning text-decoration-none"
      style={{ fontSize: "1.5rem", transition: "all 0.3s ease", borderBottom: "1px solid transparent" }}
      onMouseOver={e => e.target.style.borderBottom = "1px solid #ffc107"}
      onMouseOut={e => e.target.style.borderBottom = "1px solid transparent"}>
      {label}
    </a>
  </p>
);

export default Contact;
