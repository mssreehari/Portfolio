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
              maxWidth: "250px",
              maxHeight: "200px",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)"
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ScreenshotModal;
