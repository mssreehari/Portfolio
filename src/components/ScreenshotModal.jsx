import React from 'react';

const ScreenshotModal = ({ images, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="btn btn-danger btn-sm float-end" onClick={onClose}>Close</button>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {images.map((img, index) => (
         <img
  key={index}
  src={img}
  alt={`screenshot-${index}`}
  onError={(e) => {
    if (!e.target.dataset.fallback) {
      e.target.src = "/assets/placeholder.png";
      e.target.dataset.fallback = "true";
    }
  }}
  style={{
    maxWidth: "100%",
    width: "400px",          // Increased width
    height: "auto",          // Maintain aspect ratio
    margin: "15px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)"
  }}
/>

        ))}
      </div>
    </div>
  </div>
);

export default ScreenshotModal;
