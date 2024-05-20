import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useFavourites } from '../context/FavouritesContext';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, closeModal, displayModal, selectedPhoto }) => {
  const { favourites, toggleFavourite } = useFavourites();


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} onPhotoClick={openModal} favourites={favourites} toggleFavourite={toggleFavourite} />
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={closeModal}
          photo={selectedPhoto}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default HomeRoute;
