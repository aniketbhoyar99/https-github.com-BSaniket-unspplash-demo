import React from "react";
import { Search } from "react-feather";

const Searchbar = ({ placeholder, isRounded }) => {
  return (
    <div
      className={
        isRounded
          ? "topRoundedNavSearchBarWrapper"
          : "topSquareNavSearchBarWrapper"
      }
    >
      <div className="topNavSearchBar">
        <Search className="searchIcon" />
        <input
          type="text"
          className="topNavSearchBarInput"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Searchbar;
