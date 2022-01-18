import React from "react";

const Avatar = ({ imgUrl }) => {
  return (
    <div className="statusBoxImageWrapper">
      {imgUrl?.map((img) => {
        return (
          <div className="avtarImgWrapper">
            <img
              src={
                imgUrl.length && imgUrl.length === 1
                  ? img.profile_image.medium
                  : img.profile_image.small
              }
              width="100%"
              alt="statusBoxImage"
              className={
                imgUrl.length === 1
                  ? "statusBoxImage"
                  : "statusBoxMultipleImages"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default Avatar;
