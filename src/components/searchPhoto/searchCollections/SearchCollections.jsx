import React, { useEffect } from "react";
import { useLazyGetPhotosListQuery } from "./../../../redux/UnsplashApi";
import SearchCollectionPhotoGallery from "../../commen/searchCollectionPhotoGallery/SearchCollectionPhotoGallery";
import "../../../components/searchPhoto/searchCollections/SearchCollection.css";

const SearchCollections = ({ searchPhotos }) => {
  const [getCollections, { data: collections }] = useLazyGetPhotosListQuery();

  useEffect(() => {
    getCollections({
      entity: "search",
      subEntity: "collections",
      searchName: searchPhotos,
    });
  }, [searchPhotos]);

  return (
    <div className="searchCollectionPhotoGalleryWrapper">
      <SearchCollectionPhotoGallery
        collections={collections}
        searchPhotos={searchPhotos}
      />
    </div>
  );
};

export default SearchCollections;
