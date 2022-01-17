import React from "react";
import { Search } from "react-feather";
import { useHistory } from "react-router-dom";

const Searchbar = ({ placeholder, isRounded }) => {
  const history = useHistory();

const searchValueHandler=(e)=>{
   history.push(`/s/photos/${e.target.value}`);
}

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
          onChange={searchValueHandler}
        />
      </div>
    </div>
  );
};

export default Searchbar;
