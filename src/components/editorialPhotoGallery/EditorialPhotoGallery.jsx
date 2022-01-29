import React from "react";
import PhotoGallery from "../commen/photoGallery/PhotoGallery";

const EditorialPhotoGallery = ({ photosList }) => {
  return (
    <div className="editorialPhotoGallery">
      <PhotoGallery photos={photosList} />
    </div>
  );
};

export default EditorialPhotoGallery;
