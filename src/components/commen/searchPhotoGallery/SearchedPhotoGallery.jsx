import React from "react";
import PhotoGallery from "../photoGallery/PhotoGallery";

const SearchedPhotoGallery = ({ searchPhoto, searchPhotos }) => {
  return (
    <div>
      <div className="searchedPhotoGalleryWrapper">
        <PhotoGallery
          photos={searchPhoto?.results}
          searchPhotos={searchPhotos}
        />
      </div>
    </div>
  );
};

export default SearchedPhotoGallery;
