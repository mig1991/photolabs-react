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
        <div className="photo-details-modal__header">
          {photo.title}
        </div>
        <div className="photo-details-modal__user-details photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={photo.user.profile}
            alt={`${photo.user.username}'s profile`}
          />
          <div className="photo-list__user-info">
            <p>{photo.user.username}</p>
            <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
          </div>
        </div>
        <h2 className="photo-details-modal__similar-header">Similar Photos</h2>
        {/* Placeholder for similar photos */}
        <div className="photo-details-modal__additional-content">
          {/* Additional content goes here */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
