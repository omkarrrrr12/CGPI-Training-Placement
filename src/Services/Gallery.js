/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const photos = [
    require("../Images/Home/gallery1.jpg"),
    require("../Images/Home/gallery2.jpg"),
    require("../Images/Home/gallery3.jpg"),
    require("../Images/Home/gallery4.jpg"),
    require("../Images/Home/gallery5.jpg"),
    require("../Images/Home/gallery5.jpg"),
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (index) => {
    setSelectedPhoto(photos[index]);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="photos">
        {photos.map((photo, index) => (
          <div key={index} className="photo-container">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              onClick={() => handlePhotoClick(index)}
            />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="overlay" onClick={handleClosePhoto}>
          <div className="modal">
            <button className="close-btn" onClick={handleClosePhoto}>
              Close
            </button>
            <img src={selectedPhoto} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
