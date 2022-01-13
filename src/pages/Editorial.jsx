import React from "react";
import Searchbar from "../components/Searchbar";
import "../css/Editorial.css";

const Editorial = () => {
  return (
    <div>
      <div className="heroBackGroundImg">
        <div>
          <h3 className="heroHeading">Unsplash</h3>
          <p className="heroContains">
            The internet's source the freely-useable images.
          </p>
          <Searchbar
            placeholder="Search free high-resolution photos"
            isSquare
          />
        </div>
      </div>
    </div>
  );
};

export default Editorial;
