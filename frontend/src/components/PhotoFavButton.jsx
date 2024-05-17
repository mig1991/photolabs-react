import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(prevIsLiked => !prevIsLiked); // Using a function to reference the previous state
  };
  

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;

