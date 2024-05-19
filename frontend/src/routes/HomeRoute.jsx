import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { FavouritesProvider } from '../context/FavouritesContext';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, closeModal, displayModal, selectedPhoto }) => {
  return (
    <FavouritesProvider>
      <div className="home-route">
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} onPhotoClick={openModal} />
        {displayModal && <PhotoDetailsModal onClose={closeModal} photo={selectedPhoto} />}
      </div>
    </FavouritesProvider>
  );
};

export default HomeRoute;
