import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className={`py-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className={`display-5 fw-bold mb-3 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
              Contact Information
            </h2>
            <div className="mx-auto mb-4" style={{ width: '80px', height: '3px', background: '#ffc107' }}></div>
            <p className={`lead ${isDarkMode ? 'text-light' : 'text-muted'}`}>
              Get in touch to discuss opportunities, collaborations, or project inquiries.
            </p>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <motion.div variants={itemVariants}>
              <ContactItem
                icon={<EmailIcon />}
             title = { <h5 className="contact-title"
  style={{ color: isDarkMode ? '#FFD700' : '#333', fontSize: '18px',fontWeight: 'bold' }} >
  Email Address
</h5> }
                primary="sreeharimanezhath@gmail.com"
                secondary="Professional inquiries welcome"
                href="mailto:sreeharimanezhath@gmail.com"
                isDarkMode={isDarkMode}
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div variants={itemVariants}>
              <ContactItem
                icon={<PhoneIcon />}
                title = { <h5 className="contact-title"
  style={{ color: isDarkMode ? '#FFD700' : '#333', fontSize: '18px',fontWeight: 'bold' }} >
  Phone Number
</h5> }
                primary="+91 9809238393"
                secondary="text for a quick response"
                href="tel:+919809238393"
                isDarkMode={isDarkMode}
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div variants={itemVariants}>
              <ContactItem
                icon={<LocationIcon />}
                title = { <h5 className="contact-title"
  style={{ color: isDarkMode ? '#FFD700' : '#333', fontSize: '18px',fontWeight: 'bold' }} >
  Location
</h5> }
                primary="Edakochi, Kerala"
                secondary="India, 682010"
                href="https://maps.app.goo.gl/MitQFMgJrkVcpkTP9"
                isDarkMode={isDarkMode}
                isExternal={true}
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div variants={itemVariants}>
              <ContactItem
                icon={<LinkedInIcon />}
               title = { <h5 className="contact-title"
  style={{ color: isDarkMode ? '#FFD700' : '#333', fontSize: '18px',fontWeight: 'bold' }} >
  Linkedin profile
</h5> }
                primary="M S Sreehari"
                secondary="Professional networking"
                href="https://linkedin.com/in/m-s-sreehari-131a0b254"
                isDarkMode={isDarkMode}
                isExternal={true}
              />
            </motion.div>
          </div>
        </div>

        {/* Professional CTA Section */}
      
      </motion.div>
    </section>
  );
};

const ContactItem = ({ icon, title, primary, secondary, href, isDarkMode, isExternal = false }) => (
  <motion.a
    href={href}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    className={`d-block text-decoration-none p-4 rounded-3 border h-100 ${
      isDarkMode 
        ? 'bg-dark border-secondary text-light' 
        : 'bg-white border-light text-dark'
    }`}
    style={{ 
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}
    whileHover={{ 
      y: -5,
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
    }}
  >
    <div className="d-flex align-items-start">
      <div className="me-3 flex-shrink-0">
        <div className="p-2 rounded-2 bg-warning bg-opacity-10 border border-warning border-opacity-25">
          {icon}
        </div>
      </div>
      <div className="flex-grow-1">
        <h6 className="fw-bold mb-2 text-warning">{title}</h6>
        <p className={`mb-1 fw-semibold ${isDarkMode ? 'text-white' : 'text-dark'}`}>
          {primary}
        </p>
        <p className={`mb-0 small ${isDarkMode ? 'text-light' : 'text-muted'}`}>
          {secondary}
        </p>
      </div>
      <div className="flex-shrink-0">
        <ArrowIcon isDarkMode={isDarkMode} />
      </div>
    </div>
  </motion.a>
);

// Professional SVG Icons
const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ffc107" strokeWidth="2" fill="none"/>
    <polyline points="22,6 12,13 2,6" stroke="#ffc107" strokeWidth="2" fill="none"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#ffc107" strokeWidth="2" fill="none"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#ffc107" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="10" r="3" stroke="#ffc107" strokeWidth="2" fill="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#ffc107" strokeWidth="2" fill="none"/>
    <rect x="2" y="9" width="4" height="12" stroke="#ffc107" strokeWidth="2" fill="none"/>
    <circle cx="4" cy="4" r="2" stroke="#ffc107" strokeWidth="2" fill="none"/>
  </svg>
);

const ArrowIcon = ({ isDarkMode }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17l10-10" stroke={isDarkMode ? '#ffc107' : '#ffc107'} strokeWidth="2"/>
    <path d="M7 7h10v10" stroke={isDarkMode ? '#ffc107' : '#ffc107'} strokeWidth="2"/>
  </svg>
);

export default Contact;