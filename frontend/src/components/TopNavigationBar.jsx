import React from 'react';
import NavFavIcon from './NavFavIcon';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import SearchBar from './SearchBar';

const TopNavigationBar = ({ topics, fetchPhotosByTopic, fetchPhotosByQuery }) => {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
    // Fetch photos based on the search query
    fetchPhotosByQuery(query);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="nav-center">
        <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      </div>
      <div className="nav-right">
        <SearchBar onSearch={handleSearch} />
        <NavFavIcon />
      </div>
    </div>
  );
};

export default TopNavigationBar;
