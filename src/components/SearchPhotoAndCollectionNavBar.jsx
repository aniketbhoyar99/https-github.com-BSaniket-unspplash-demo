import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Image, Database } from "react-feather";
import SearchNavDropDownList from "./SearchNavDropDownList";
import "../css/SearchPhotoAndCollectionNavBar.css";

const SearchPhotoAndCollectionNavBar = ({
  type,
  setOrientationData,
  setOrderByData,
  orientationData,
  orderByData,
}) => {
  const param = useParams();
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
          to={`/s/photos/${param.searchPhotos}`}
          className="searchAndCollectionNavLink"
        >
          Photos 3.5k
        </NavLink>
        <Database className="searchCollectionImage" />
        <NavLink
          to={`/s/collections/${param.searchPhotos}`}
          className="searchAndCollectionNavLink"
        >
          Collections 9.8k
        </NavLink>
      </div>
      <div className="DropDownWrapper">
        {type === "photos" && (
          <SearchNavDropDownList
            btnName={orientationData ? orientationData : "Any orientation"}
            className={
              orientationData
                ? "SelectedDropdownToggleBtn"
                : "DropdownToggleBtn"
            }
            DropDownListData={OrientationItem}
            setOrientationData={setOrientationData}
          />
        )}

        {type === "photos" && (
          <SearchNavDropDownList
            btnName={`Sort by ${orderByData ? orderByData : "Relevance"}`}
            className={
              orderByData ? "SelectedDropdownToggleBtn" : "DropdownToggleBtn"
            }
            DropDownListData={RelevanceItem}
            setOrientationData={setOrderByData}
          />
        )}
      </div>
    </div>
  );
};

export default SearchPhotoAndCollectionNavBar;
