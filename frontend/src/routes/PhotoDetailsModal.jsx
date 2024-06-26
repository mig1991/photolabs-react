import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, photo, favourites, toggleFavourite }) => {
  if (!photo) return null;

  const similarPhotos = Object.values(photo.similar_photos || {});

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__image-container">
          <img src={photo.urls.regular} alt={photo.title} className="photo-details-modal__image" />
          <PhotoFavButton photo={photo} favourites={favourites} toggleFavourite={toggleFavourite} />
        </div>
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
        <div className="photo-details-modal__additional-content">
          {similarPhotos.length > 0 ? (
            <PhotoList photos={similarPhotos} onPhotoClick={() => {}} favourites={favourites} toggleFavourite={toggleFavourite} />
          ) : (
            <p>No similar photos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
