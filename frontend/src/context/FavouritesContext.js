import React, { createContext, useState } from 'react';

// Create the context - can be accessed by children without needing to manually pass down props
const FavouritesContext = createContext();

// Create the provider component
const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Function to add a photo to favourites
  const addFavourite = (photo) => {
    setFavourites((prevFavourites) => [...prevFavourites, photo]);
  };

  // Function to remove a photo from favourites
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
