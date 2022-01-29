import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetSearchPhotosQuery } from "../../redux/UnsplashApi";
import SearchedPhotoGallery from "../../components/commen/searchPhotoGallery/SearchedPhotoGallery";
import SearchPhotoAndCollectionNavBar from "../../components/searchPhoto/searchPhotoAndCollectionNavBar/SearchPhotoAndCollectionNavBar";
import SearchCollections from "../../components/searchPhoto/searchCollections/SearchCollections";
import PaginationComponent from "../../components/pagination/PaginationComponent";

const SearchPhotos = ({ type }) => {
  const searchParams = useParams();
  const { searchPhotos } = searchParams;
  const [orientationData, setOrientationData] = useState("");
  const [orderByData, setOrderByData] = useState("");
  const [clear, setClear] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [upperPageBound, setUpperPageBound] = useState(5);
  const [lowerPageBound, setLowerPageBound] = useState(0);

  const [getSearchPhotos, { data: searchPhoto, isLoading }] =
    useLazyGetSearchPhotosQuery();

  useEffect(() => {
    getSearchPhotos(
      {
      query: searchPhotos,
      orientation: orientationData.value,
      orderBy: orderByData.value,
      clear: clear,
      page: currentPage,
      perPage: pageSize,
    }
    );
  }, [
    searchPhotos,
    orientationData,
    orderByData,
    clear,
    currentPage,
    pageSize
  ]);

  return (
    <div>
      <SearchPhotoAndCollectionNavBar
        type={type}
        setOrientationData={setOrientationData}
        setOrderByData={setOrderByData}
        orientationData={orientationData.label}
        orderByData={orderByData.label}
        setClear={setClear}
      />
      {isLoading ? (
        "Loading..........."
      ) : (
        <div>
          {type === "photos" ? (
            <div>
            { searchPhoto && <PaginationComponent
                totalPages={searchPhoto?.total_pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                lowerPageBound={lowerPageBound}
                upperPageBound={upperPageBound}
                setUpperPageBound={setUpperPageBound}
                setLowerPageBound={setLowerPageBound}
              />}
              <SearchedPhotoGallery
                searchPhoto={searchPhoto}
                searchPhotos={searchPhotos}
              />
              {searchPhoto && <PaginationComponent
                totalPages={searchPhoto?.total_pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                lowerPageBound={lowerPageBound}
                upperPageBound={upperPageBound}
                setUpperPageBound={setUpperPageBound}
                setLowerPageBound={setLowerPageBound}
              />}
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
