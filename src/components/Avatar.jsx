import React from 'react'

const Avatar = ({imgUrl}) => {
    return (
      <div className="statusBoxImageWrapper">
        {imgUrl?.map((img) => {
          return (
            <div>
              <img
                src={
                  imgUrl.length && imgUrl.length === 1
                    ? img.profile_image.medium
                    : img.profile_image.small
                }
                alt="statusBoxImage"
                className="statusBoxImage"
              />
            </div>
          );
        })}
      </div>
    );
}

export default Avatar;
