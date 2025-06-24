// src/App.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScreenshotModal from './components/ScreenshotModal';

import { projects, skills } from './data';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : true;
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedScreenshots, setSelectedScreenshots] = useState([]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const openModal = (images) => {
    setSelectedScreenshots(images);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedScreenshots([]);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-dark' : 'bg-light'} min-vh-100`} style={{ backgroundColor: isDarkMode ? '#1F2833' : '#ffffff' }}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} skills={skills} />
      <Projects isDarkMode={isDarkMode} projects={projects} openModal={openModal} />
      <Contact isDarkMode={isDarkMode} />
      {showModal && <ScreenshotModal images={selectedScreenshots} onClose={closeModal} />}
    </div>
  );
};

export default App;
