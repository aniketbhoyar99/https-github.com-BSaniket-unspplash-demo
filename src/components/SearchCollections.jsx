import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLazyGetCollectionQuery } from "../redux/UnsplashApi";

const SearchCollections = ({ searchPhotos }) => {
 const history= useHistory();
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
              <card
                className="searchCollectionImgWrapper"
                onClick={() =>
                  history.push(`/collections/${searchCollection.id}`)
                }
              >
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
              </card>
              <p className="collectionImgTitle">{searchCollection.title}</p>
              <div className="collectionImgContaints">
                <p className="collectiontotalPhotos">{`${searchCollection.total_photos} photos.`}</p>
                <p>{`Curated by ${searchCollection.user.first_name}${searchCollection.user.last_name}`}</p>
              </div>
              <div style={{ display: "flex" }}>
                {searchCollection.tags.map((tag, index) =>
                  index < 3 ? <p className="tagText">{tag.title}</p> : ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCollections;
