import React, { useEffect } from "react";
import { useLazyGetCollectionQuery } from "../redux/UnsplashApi";

const SearchCollections = ({ searchPhotos }) => {
  const [getCollections, { data: collections }] = useLazyGetCollectionQuery();

  useEffect(() => {
    getCollections(searchPhotos);
  }, [searchPhotos]);

  return (
    <div>
      <h3 className="searchCollectionTitle">{searchPhotos}</h3>
      <div className="searchCollectionWrapper">
        {collections?.results.map((searchCollection, index) => {
          return (
            <div>
              <div className="searchCollectionImgWrapper">
                {searchCollection.preview_photos.map((previewPhoto, index) =>
                  index < 3 ? (
                    <img
                      className={`index-${index}`}
                      src={previewPhoto?.urls?.small}
                      width="100%"
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <p className="collectionImgTitle">{searchCollection.title}</p>
              <div className="collectionImgContaints">
                <p className="collectiontotalPhotos">{`${searchCollection.total_photos} photos.`}</p>
                <p>{`Curated by ${searchCollection.user.first_name}${searchCollection.user.last_name}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCollections;
