import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetPhotosListQuery } from "../../redux/UnsplashApi";
import PhotoGallery from "../../components/commen/photoGallery/PhotoGallery";
import CollectionUserProfile from "../../components/collectionUserProfile/CollectionUserProfile";
import "../../pages/previewCollectionPhotos/PreviewCollectionPhotos.css";

const PreviewCollectionPhotos = () => {
  const collectionId = useParams();
  const { id } = collectionId;
  const [getCollectionsPreview, { data: CollectionPreview }] =
    useLazyGetPhotosListQuery();

  useEffect(() => {
    getCollectionsPreview({
      entity: "collections",
      userId: id,
      subEntity: "photos",
    });
  }, [id]);

  return (
    <div className=" previewCollectionPhotosWrapper">
      <div className="collectionPreviewWrapper">
        <CollectionUserProfile />
        <PhotoGallery photos={CollectionPreview} />
      </div>
    </div>
  );
};

export default PreviewCollectionPhotos;
