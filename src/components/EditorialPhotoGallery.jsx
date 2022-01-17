import React from "react";

const EditorialPhotoGallery = ({ photosList }) => {
  return (
    <div className="editorialPhotoGallery">
      {photosList?.map((photoList) => {
        return (
          <div className="editorialImgWrapper">
            <img src={photoList.urls.small} alt={photoList.alt_description} />
          </div>
        );
      })}
    </div>
  );
};

export default EditorialPhotoGallery;
