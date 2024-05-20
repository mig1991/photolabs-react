import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import { FavouritesContext } from '../context/FavouritesContext';
import '../styles/NavFavIcon.scss';

function NavFavIcon() {
  const { favourites } = useContext(FavouritesContext);
  const hasFavourites = favourites.length > 0;

  return (
    <div className="nav-fav-icon">
      <FavIcon isLiked={hasFavourites} />
      {hasFavourites && <div className="nav-notification-dot"></div>}
    </div>
  );
}

export default NavFavIcon;
