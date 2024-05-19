// src/components/PhotoFavButton.jsx
import React, { useCallback, useState, useContext } from 'react';
import FavIcon from './FavIcon';
import { FavouritesContext } from '../context/FavouritesContext';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo }) {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.some(fav => fav.id === photo.id);

  const toggleLike = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the parent element

    if (isFavourite) {
      removeFavourite(photo.id);
    } else {
      addFavourite(photo);
    }
  };

  return (
    <div className={`photo-list__fav-icon ${isFavourite ? 'favourited' : ''}`} onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isLiked={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;

