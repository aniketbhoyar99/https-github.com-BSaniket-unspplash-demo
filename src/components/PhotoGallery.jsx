import React from "react";

const PhotoGallery = ({ photos }) => {
  return (
    <div className="photosWrapper">
      {photos?.map((galleryphoto) => {
        return (
          <div className="galleryImagesWrapper">
            <img src={galleryphoto?.urls?.small} alt="galleryPhotos" width="100%"/>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
