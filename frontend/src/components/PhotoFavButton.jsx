// src/components/PhotoFavButton.jsx

import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import { FavouritesContext } from '../context/FavouritesContext';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo }) {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.some(fav => fav.id === photo.id);

  const toggleLike = () => {
    console.log('Toggling like for photo:', photo); // Debug log
    if (isFavourite) {
      console.log('Removing from favourites:', photo.id); // Debug log
      removeFavourite(photo.id);
    } else {
      console.log('Adding to favourites:', photo); // Debug log
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

