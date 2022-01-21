import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetCollectionsPreviewQuery } from "../redux/UnsplashApi";
import PhotoGallery from "../components/PhotoGallery";
import CollectionUserProfile from "../components/CollectionUserProfile";
import "../css/PreviewCollectionPhotos.css";

const PreviewCollectionPhotos = () => {
  const collectionId = useParams();
  const { id } = collectionId;
  const [getCollectionsPreview, { data: CollectionPreview }] =
    useLazyGetCollectionsPreviewQuery();

  useEffect(() => {
    getCollectionsPreview({ userId: id, entity: "photos" });
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
