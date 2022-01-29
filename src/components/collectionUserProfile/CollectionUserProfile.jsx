import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetPhotosListQuery } from "../../redux/UnsplashApi";

const CollectionUserProfile = () => {
  const collectionId = useParams();
  const { id } = collectionId;
  const [getCollectionsProfile, { data: CollectionUserProfile }] =
    useLazyGetPhotosListQuery();

  useEffect(() => {
    getCollectionsProfile({ entity: "collections", userId: id });
  }, [id]);

  return (
    <div>
      <div className="collectionUserProfileTitle">
        {CollectionUserProfile?.title}
      </div>
      <div className="collectionProfileWrapper">
        <div>
          <img
            src={CollectionUserProfile?.user?.profile_image.small}
            alt="userProfileImage"
            className="prfileImage"
          />
        </div>
        <p>{CollectionUserProfile?.user?.name}</p>
      </div>
      <p className="photoLikedText">{`${CollectionUserProfile?.total_photos} photos`}</p>
    </div>
  );
};

export default CollectionUserProfile;
