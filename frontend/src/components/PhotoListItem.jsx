import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
      <div className="photo-details">
        <h2>{username}</h2>
        <p>{`${location.city}, ${location.country}`}</p>
        <img src={imageSource} alt={`Photo ${id}`} className="photo" />
      </div>
    </div>
  );
};


// Export the component so it can be used in other files
export default PhotoListItem;


