import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, photo }) => {
  console.log('Selected photo details:', photo); // Log the selected photo details

  if (!photo) return null; // Ensure the component only renders when a photo is provided

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img src={photo.urls.regular} alt={photo.title} className="photo-details-modal__image" />
        {/* Placeholder for additional content */}
        <div className="photo-details-modal__additional-content">
          {/* Additional content goes here */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
