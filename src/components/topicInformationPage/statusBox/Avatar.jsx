import React from "react";

const Avatar = ({ imgUrl }) => {
  return (
    <div className="statusBoxImageWrapper">
      {imgUrl?.map((img,index) => {
        return (
          <div className="avtarImgWrapper" key={index}>
            <img
              src={
                imgUrl.length && imgUrl.length === 1
                  ? img.profile_image.medium
                  : img.profile_image.small
              }
              key={index}
              alt={img.first_name}
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
