import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Image, Database } from "react-feather";
import SearchNavDropDownList from "./SearchNavDropDownList";
import "../css/SearchPhotoAndCollectionNavBar.css";

const SearchPhotoAndCollectionNavBar = ({ type }) => {
  const param = useParams();
  const OrientationItem = ["Landscape", "Portrait", "Square"];
  const RevevanceItem = ["Newest", "Relevance"];
  return (
    <div className="searchCollectionNavBarWrapper">
      <div className="searchAndCollectionNavBar">
        <Image />
        <NavLink
          to={`/s/photos/${param.searchPhotos}`}
          className="searchAndCollectionNavLink"
        >
          Photos 3.5k
        </NavLink>
        <Database />
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
            btnName="Any Orientation"
            DropDownListData={OrientationItem}
          />
        )}

        {type === "photos" && (
          <SearchNavDropDownList
            btnName="Sort By Relevance"
            DropDownListData={RevevanceItem}
          />
        )}
      </div>
    </div>
  );
};

export default SearchPhotoAndCollectionNavBar;
