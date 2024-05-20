import React, { useEffect } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useFavourites } from '../context/FavouritesContext';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, closeModal, displayModal, selectedPhoto, fetchPhotosByTopic }) => {
  const { favourites, toggleFavourite } = useFavourites();

  useEffect(() => {
    console.log("HomeRoute photos:", photos); // Log photos prop to inspect its content
    console.log("HomeRoute topics:", topics); // Log topics prop to inspect its content
  }, [photos, topics]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
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
