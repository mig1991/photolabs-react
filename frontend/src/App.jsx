// components/App.jsx
import React from 'react';
import { FavouritesProvider } from './context/FavouritesContext';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

function App() {
  const {
    state,
    displayModal,
    selectedPhoto,
    openModal,
    closeModal,
  } = useApplicationData();

  return (
    <FavouritesProvider>
      <div className="App">
        <HomeRoute
          photos={state.photos}
          topics={state.topics}
          openModal={openModal}
          closeModal={closeModal}
          displayModal={displayModal}
          selectedPhoto={selectedPhoto}
        />
      </div>
    </FavouritesProvider>
  );
}

export default App;
