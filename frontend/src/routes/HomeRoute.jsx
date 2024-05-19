import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';
import { FavouritesProvider } from '../context/FavouritesContext';

const HomeRoute = ({ photos, topics, openModal, closeModal, displayModal }) => {
  return (
    <FavouritesProvider>
      <div className="home-route">
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} onPhotoClick={openModal} />
        {displayModal && <PhotoDetailsModal onClose={closeModal} />}
      </div>
    </FavouritesProvider>
  );
};

export default HomeRoute;
