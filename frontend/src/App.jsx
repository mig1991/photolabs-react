import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal'; // Import PhotoDetailsModal

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        closeModal={closeModal}
        displayModal={displayModal}
        selectedPhoto={selectedPhoto}
      />
      {displayModal && (
        <PhotoDetailsModal
          onClose={closeModal}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
}

export default App;
