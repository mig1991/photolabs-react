import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

function App() {
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => setDisplayModal(true);
  const closeModal = () => setDisplayModal(false);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        closeModal={closeModal}
        displayModal={displayModal}
      />
    </div>
  );
}

export default App;
