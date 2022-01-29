import React from "react";
import { useHistory } from "react-router-dom";

const SearchCollectionPhotoGallery = ({ collections, searchPhotos }) => {
  const history = useHistory();

  return (
    <div>
      <h3 className="searchCollectionTitle">{searchPhotos}</h3>
      <div className="searchCollectionWrapper">
        {collections?.results.map((searchCollection, index) => {
          return (
            <div key={index}>
              <div
                className="searchCollectionImgWrapper"
                onClick={() =>
                  history.push(`/collections/${searchCollection.id}`)
                }
                key={index}
              >
                {searchCollection.preview_photos.map((previewPhoto, index) =>
                  index < 3 ? (
                    <img
                      className={`index-${index}`}
                      src={previewPhoto?.urls?.small}
                      alt="collectionImg"
                      key={index}
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
              <div className="collectionTagsWrapper">
                {searchCollection.tags.map((tag, index) =>
                  index < 3 ? <p key={index} className="tagText">{tag.title}</p> : ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCollectionPhotoGallery;
