import React from 'react';
import NavFavIcon from './NavFavIcon';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import SearchBar from './ SearchBar';

const TopNavigationBar = ({ topics, fetchPhotosByTopic }) => {

  const handleSearch = (query) => {
    // Implement the search logic here
    console.log(`Searching for ${query}`);
  };


//   return (
//     <div className="top-nav-bar">
//       <span className="top-nav-bar__logo">PhotoLabs</span>
//       <div className="nav-topics">
//         <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
//       </div>
//       <div className="nav-search">
//         <SearchBar onSearch={handleSearch} />
//       </div>
//       <div className="favourites-notification">
//         <NavFavIcon />
//       </div>
//     </div>
//   );
// };

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
