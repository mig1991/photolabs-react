// src/components/TopNavigationBar.jsx

import React, { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <div className="favourites-notification">
        {favourites.length > 0 && (
          <span className="favourites-count">
            {favourites.length} Favourited Photo{favourites.length > 1 ? 's' : ''}
          </span>
        )}
      </div>
    </div>
  );
};

export default TopNavigationBar;
