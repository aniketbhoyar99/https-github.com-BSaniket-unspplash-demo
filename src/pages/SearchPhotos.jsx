import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetSearchPhotosQuery } from "../redux/UnsplashApi";
import SearchedPhotoGallery from "../components/SearchedPhotoGallery";
import SearchPhotoAndCollectionNavBar from "../components/SearchPhotoAndCollectionNavBar";
import SearchCollections from "../components/SearchCollections";
import "../css/SearchPhotoGallery.css";
import "../css/SearchCollection.css";
import "../css/SearchNavDropDownList.css";

const SearchPhotos = ({ type }) => {
  const searchParams = useParams();
  const [orientationData, setOrientationData] = useState("");
  const [orderByData, setOrderByData] = useState("");

  const { searchPhotos } = searchParams;
  const [getSearchPhotos, { data: searchPhoto, isLoading }] =
    useLazyGetSearchPhotosQuery();

  useEffect(() => {
    getSearchPhotos({
      query: searchPhotos,
      orientation: orientationData.value,
      orderBy: orderByData.value,
    });
  }, [searchPhotos, orientationData, orderByData]);

  return (
    <div>
      <SearchPhotoAndCollectionNavBar
        type={type}
        setOrientationData={setOrientationData}
        setOrderByData={setOrderByData}
        orientationData={orientationData.label}
        orderByData={orderByData.label}
      />
      {isLoading ? (
        "isLoading..........."
      ) : (
        <div className="photoAndCollectionWrapper">
          {type === "photos" ? (
            <div>
              <SearchedPhotoGallery searchPhoto={searchPhoto} />
            </div>
          ) : (
            <div>
              <SearchCollections searchPhotos={searchPhotos} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPhotos;
