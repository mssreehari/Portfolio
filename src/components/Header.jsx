import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
   <header
  className={`d-flex justify-content-between align-items-center p-3 px-4 sticky-top ${isDarkMode ? 'bg-dark' : 'bg-light'}`}
  style={{
    top: 0,
    zIndex: 1050,
    position: "sticky"
    // borderBottom: isDarkMode ? "1px solid #333" : "1px solid #ccc" ← remove this line
  }}
>

    <a href="#home" className="text-decoration-none"  >
      <h1 className={`${isDarkMode ? 'text-warning' : 'text-dark'}`} style={{ fontSize: "1.5rem", fontWeight: "300", letterSpacing: "1px" }}>
        M S Sreehari.
      </h1>
    </a>
      <motion.button
        onClick={toggleTheme}
        className={`btn ${isDarkMode ? 'btn-outline-warning' : 'btn-outline-dark'} rounded-circle me-3`}
        whileHover={{ scale: 1.1 }}
        style={{
          width: "40px", height: "40px",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "fixed", right: "20px", top: "20px", zIndex: 1000
        }}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </motion.button>

      <nav className="d-flex font-weight-light justify-content-between align-items-center p-4 gap-4 ms-auto "
        style={{ marginRight: "150px", fontSize: "20px", gap: "3rem" }}>
        {["About","Skills", "Projects", "Contact"].map(label => (
          <motion.a
            key={label}
            href={`#${label.toLowerCase()}`}
            whileHover={{ scale: 1.1 }}
            className={`text-decoration-none ${isDarkMode ? 'text-light' : 'text-dark'} px-3 nav-link-underline`}
          >
            {label}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
