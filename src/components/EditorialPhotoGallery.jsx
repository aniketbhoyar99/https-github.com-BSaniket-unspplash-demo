import React from "react";

const EditorialPhotoGallery = ({ photosList }) => {
  return (
    <div className="editorialPhotoGallery">
      {photosList?.map((photoList) => {
        return (
          <div className="editorialImgWrapper">
            <img src={photoList.urls.small} alt={photoList.alt_description} width="100%"/>
          </div>
        );
      })}
    </div>
  );
};

export default EditorialPhotoGallery;
