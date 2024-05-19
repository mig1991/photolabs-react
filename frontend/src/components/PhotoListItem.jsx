import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, onClick, favourites, toggleFavourite }) => {
  const { user, urls, location } = photo;

  const handleClick = () => {
    onClick(photo);
  };

  return (
    <div className="photo-list__item" onClick={handleClick}>
      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`Photo ${photo.id}`}
      />
      <PhotoFavButton
        photo={photo}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`${user.username}'s profile`}
        />
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
