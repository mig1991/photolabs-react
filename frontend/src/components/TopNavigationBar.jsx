import React, { useContext } from 'react';
import TopicList from './TopicList';
import NavFavIcon from './NavFavIcon';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <div className="favourites-notification">
        <NavFavIcon />
      </div>
    </div>
  );
};

export default TopNavigationBar;
