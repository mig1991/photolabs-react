import React, { createContext, useContext, useState } from 'react';

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

  // Function to toggle a photo in favourites
  const toggleFavourite = (photo) => {
    const isFavourited = favourites.some(fav => fav.id === photo.id);
    if (isFavourited) {
      removeFavourite(photo.id);
    } else {
      addFavourite(photo);
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

// Define and export the useFavourites hook
const useFavourites = () => {
  return useContext(FavouritesContext);
};

export { FavouritesContext, FavouritesProvider, useFavourites };
