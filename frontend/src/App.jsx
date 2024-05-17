import React, { useState } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => {
  // Example state to track if there are favorite photos
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  return (
    <div className="App">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList />
    </div>
  );
};

export default App;

