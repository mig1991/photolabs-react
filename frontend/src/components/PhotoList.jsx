
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onPhotoClick, favourites, toggleFavourite }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          onClick={onPhotoClick}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
};

export default PhotoList;
