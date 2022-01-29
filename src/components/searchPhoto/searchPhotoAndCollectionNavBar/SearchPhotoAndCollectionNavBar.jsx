import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Image, Database } from "react-feather";
import SearchNavDropDownList from "./searchNavDropDownList/SearchNavDropDownList";
import "../../../components/searchPhoto/searchPhotoAndCollectionNavBar/SearchPhotoAndCollectionNavBar.css";

const SearchPhotoAndCollectionNavBar = ({
  type,
  setOrientationData,
  setOrderByData,
  orientationData,
  orderByData,
  setClear,
}) => {
  const param = useParams();
  const { searchPhotos } = param;
  const location = useLocation();
  const { pathname } = location;
  const OrientationItem = [
    { label: "Any orientation" },
    { value: "landscape", label: "Landscape" },
    { value: "portrait", label: "Portrait" },
    { value: "squarish", label: "Square" },
  ];
  const RelevanceItem = [
    { value: "relevant", label: "Relevance" },
    { value: "latest", label: "Newest" },
  ];

  return (
    <div className="searchCollectionNavBarWrapper">
      <div className="searchAndCollectionNavBar">
        <Image className="searchCollectionImage" />
        <NavLink
          to={`/s/photos/${searchPhotos}`}
          className="searchAndCollectionNavLink"
          activeClassName={
            pathname === `/s/photos/${searchPhotos}` ? "active--link" : ''
          }
        >
          Photos 3.5k
        </NavLink>
        <Database className="searchCollectionImage" />
        <NavLink
          to={`/s/collections/${searchPhotos}`}
          className="searchAndCollectionNavLink"
          activeClassName={
            pathname === `/s/collections/${searchPhotos}` ? "active--link" : ""
          }
        >
          Collections 9.8k
        </NavLink>
      </div>

      <div className="dropDownWrapper">
        {(orderByData || orientationData) &&
        (orderByData !== "Relevance" ||
          orientationData !== "Any orientation") ? (
          <button
            className="clearBtn"
            onClick={() => {
              setClear("clear");
              setOrientationData("");
              setOrderByData("");
            }}
          >
            clear
          </button>
        ) : (
          ""
        )}
        {type === "photos" && (
          <SearchNavDropDownList
            btnName={orientationData ? orientationData : "Any orientation"}
            className={
              orientationData
                ? "selectedDropdownToggleBtn"
                : "dropdownToggleBtn"
            }
            setClear={setClear}
            DropDownListData={OrientationItem}
            setOrientationData={setOrientationData}
          />
        )}

        {type === "photos" && (
          <SearchNavDropDownList
            btnName={`Sort by ${orderByData ? orderByData : "Relevance"}`}
            className={
              orderByData ? "selectedDropdownToggleBtn" : "dropdownToggleBtn"
            }
            setClear={setClear}
            DropDownListData={RelevanceItem}
            setOrientationData={setOrderByData}
          />
        )}
      </div>
    </div>
  );
};

export default SearchPhotoAndCollectionNavBar;
