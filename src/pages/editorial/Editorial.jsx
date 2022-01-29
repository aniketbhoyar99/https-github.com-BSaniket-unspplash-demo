import React, { useEffect } from "react";
import Searchbar from "../../components/commen/searchBar/Searchbar";
import EditorialPhotoGallery from "../../components/editorialPhotoGallery/EditorialPhotoGallery";
import { useLazyGetPhotosListQuery } from "../../redux/UnsplashApi";
import { NavLink } from "react-router-dom";
import "../../pages/editorial/Editorial.css";

const Editorial = () => {
  const [getPhotoList, { data: photosList, isLoading }] =
    useLazyGetPhotosListQuery();

  useEffect(() => {
    getPhotoList({ entity: "photos" });
  }, []);

  return (
    <>
      <div className="heroBackGroundImg">
        <div>
          <h3 className="heroHeading">Unsplash</h3>
          <p className="heroContains">
            The internet's source the <NavLink to="/" className="freeImagesLink">freely-useable images.</NavLink>
          </p>
          <p className="heroContains">Power by creators everyWhere.</p>

          <Searchbar
            placeholder="Search free high-resolution photos"
            isSquare
          />
        </div>
      </div>
      <div className="editorialPhotoGalleryWrapper">
        {isLoading ? (
          "Loading.................."
        ) : (
          <EditorialPhotoGallery photosList={photosList && photosList} />
        )}
      </div>
    </>
  );
};

export default Editorial;
