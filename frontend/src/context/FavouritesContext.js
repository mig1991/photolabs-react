// src/context/FavouritesContext.js

import React, { createContext, useState } from 'react';

// create the context - can be accessed by children without needing to manually pass down props
const FavouritesContext = createContext();

// create the provider component
const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // function to add a photo to favourites
  const addFavourite = (photo) => {
    setFavourites((prevFavourites) => [...prevFavourites, photo]);
  };

  // function to remove a photo from favourites
  const removeFavourite = (photoId) => {
    setFavourites((prevFavourites) => prevFavourites.filter(photo => photo.id !== photoId));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouritesProvider };