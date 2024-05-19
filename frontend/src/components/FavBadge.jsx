// src/components/FavBadge.jsx

import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favouritesCount }) => {
  return (
    <div className='fav-badge'>
      {isFavPhotoExist && (
        <>
          <FavIcon isLiked={true} />
          <span className="fav-badge__count">{favouritesCount}</span>
        </>
      )}
    </div>
  ); 
};

export default FavBadge;
