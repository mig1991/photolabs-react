// hooks/useApplicationData.js
import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

function useApplicationData() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    console.log('Opening modal with photo:', photo);
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  return {
    state: { photos, topics },
    displayModal,
    selectedPhoto,
    openModal,
    closeModal,
  };
}

export default useApplicationData;
