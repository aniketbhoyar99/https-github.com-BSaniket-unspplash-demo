
const SearchedPhotoGallery = ({ searchPhoto }) => {
  return (
    <div className="searchedPhotoGalleryWrapper">
      {searchPhoto?.results?.map((photo) => {
        return (
          <div className="searchImgWrapper">
            <img
              src={photo?.urls?.small}
              width="100%"
              alt={photo?.alt_description}
            />
          </div>
        );
      })}
    </div>
    
  );
};

export default SearchedPhotoGallery;
