import React from 'react';
import NavFavIcon from './NavFavIcon';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, fetchPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="nav-topics">
        <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      </div>
      <div className="favourites-notification">
        <NavFavIcon />
      </div>
    </div>
  );
};


export default TopNavigationBar;
