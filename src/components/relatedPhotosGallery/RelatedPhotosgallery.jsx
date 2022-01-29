import React, { useEffect } from "react";
import { useLazyGetPhotosListQuery } from "../../redux/UnsplashApi";
import PhotoGallery from "../commen/photoGallery/PhotoGallery";

const RelatedPhotosgallery = ({ userId }) => {
  const [getrelatedPhoto, { data: getRelatedPhotoList }] = useLazyGetPhotosListQuery();
  useEffect(() => {
    getrelatedPhoto({ subEntity: "related", userId: userId, entity: "photos" });
  }, []);

  return (
    <div>
       <PhotoGallery photos={getRelatedPhotoList?.results ?? []} />    
    </div>
  );
};

export default RelatedPhotosgallery;