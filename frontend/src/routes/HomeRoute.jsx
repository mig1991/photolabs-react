import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import { FavouritesProvider } from '../context/FavouritesContext';

const HomeRoute = ({ photos, topics }) => {
  return (
    <FavouritesProvider> 
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} />
    </div>
    </FavouritesProvider>
  );
};

export default HomeRoute;
