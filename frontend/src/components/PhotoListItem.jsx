import React from "react";

import "../styles/PhotoListItem.scss";





const PhotoListItem = ({ photo }) => {
  const { username, imageSource, id, location, profile } = photo;
  
  return (
    <div className="photo-list__item">
      <img 
        className="photo-list__user-profile"
        src={profile} 
        alt={`${username}'s profile`} 
      />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
      <img 
        className="photo-list__image"
        src={imageSource} 
        alt={`Photo ${id}`} 
      />
    </div>
  );
};




// Export the component so it can be used in other files
export default PhotoListItem;


