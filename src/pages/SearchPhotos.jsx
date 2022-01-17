import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetSearchPhotosQuery } from "../redux/UnsplashApi";
import SearchedPhotoGallery from "../components/SearchedPhotoGallery";
import SearchPhotoAndCollectionNavBar from "../components/SearchPhotoAndCollectionNavBar";
import SearchCollections from "../components/SearchCollections";
import "../css/SearchPhotoGallery.css";
import "../css/SearchCollection.css";

const SearchPhotos = ({ type }) => {
  const searchParams = useParams();
  const { searchPhotos } = searchParams;
  const [getSearchPhotos, { data: searchPhoto }] =
    useLazyGetSearchPhotosQuery();

  useEffect(() => {
    getSearchPhotos(searchPhotos);
  }, [searchPhotos]);

  return (
    <div>
      <SearchPhotoAndCollectionNavBar type={type }/>
      <div className="photoAndCollectionWrapper">
        {type === "photos" ? (
          <SearchedPhotoGallery searchPhoto={searchPhoto} />
        ) : (
          <SearchCollections searchPhotos={searchPhotos} />
        )}
      </div>
    </div>
  );
};

export default SearchPhotos;
