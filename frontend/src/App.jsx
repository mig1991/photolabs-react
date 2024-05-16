// src/App.js

import React from 'react';
import PhotoListItem from './components/PhotoListItem';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const App = () => {
  // define the sample data for each PhotoListItem
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  // create an array of photo data
  const photos = new Array(3).fill(sampleDataForPhotoListItem).map((photo, index) => ({
    ...photo,
    id: index + 1,
  }));

  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};




export default App;


