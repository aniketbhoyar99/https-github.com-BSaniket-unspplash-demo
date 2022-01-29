import React,{useState} from "react";
import ModelContainer from "../model/Model";
import { useLazyGetPhotosListQuery } from "../../../redux/UnsplashApi";
import "../model/ModelData.css";

const PhotoGallery = ({ photos, searchPhotos }) => {
  const [GetPhoto, { data: getPhoto }] = useLazyGetPhotosListQuery();
  const [model, setModel] = useState(false);
  const [userId, setUserId] = useState();
  const toggle = (id) => {
    setUserId(id);
    setModel(!model);
    GetPhoto({ userId: id ,entity:"photos"});    
  };

  return (
    <div className="photoGalleryContainer">
      <h2 className="searchName">{searchPhotos}</h2>
      <div className="photosWrapper">
        {photos?.map((galleryphoto,index) => {
          return (
            <div className="galleryImagesWrapper" key={index}>
              <img
                src={galleryphoto?.urls?.small}
                alt={galleryphoto.alt_description}
                onClick={() => toggle(galleryphoto.id)}
                key={index}
                className="galleryImage"
              />
            </div>
          );
        })}
        <ModelContainer
          model={model}
          toggle={toggle}
          getPhoto={getPhoto}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
