import React from 'react';
import { FavouritesProvider } from './context/FavouritesContext';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

function App() {
  const {
    state,
    displayModal,
    selectedPhoto,
    updateToFavPhotoIds,
    removeFavPhotoIds,
    selectPhoto,
    closePhotoDetailsModal,
    fetchPhotosByTopic,
    fetchPhotosByQuery, 
  } = useApplicationData();


  return (
    <FavouritesProvider>
      <div className="App">
        <HomeRoute
          photos={state.photos}
          topics={state.topics}
          openModal={selectPhoto}
          closeModal={closePhotoDetailsModal}
          displayModal={state.displayModal}
          selectedPhoto={state.selectedPhoto}
          updateToFavPhotoIds={updateToFavPhotoIds}
          removeFavPhotoIds={removeFavPhotoIds}
          fetchPhotosByTopic={fetchPhotosByTopic}
          fetchPhotosByQuery={fetchPhotosByQuery}
        />
      </div>
    </FavouritesProvider>
  );
}

export default App;

