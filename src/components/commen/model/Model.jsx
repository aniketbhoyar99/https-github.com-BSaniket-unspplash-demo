import React from "react";
import { Modal, ModalBody} from "reactstrap";
import SearchCollectionPhotoGallery from "../searchCollectionPhotoGallery/SearchCollectionPhotoGallery";
import RelatedPhotosgallery from "../../relatedPhotosGallery/RelatedPhotosgallery";

const ModelContainer = ({ toggle, model, getPhoto, userId }) => {
  return (
    <div>
      <Modal isOpen={model} toggle={toggle} size="xl" className="modelContainer">
        <ModalBody>
          <div>
            <div className="userProfileWrapper">
              <div>
                <img
                  className="profileImg"
                  src={getPhoto?.user.profile_image.small}
                  alt={getPhoto?.alt_description}
                />
              </div>
              <p className="userName">{`${getPhoto?.user.first_name} ${getPhoto?.user.last_name}`}</p>
            </div>
            <div className="ProfilePreviewImg">
              <img src={getPhoto?.urls.small} alt={getPhoto?.alt_description} className="prevImage"/>
            </div>
            <div className="descriptionWrapper">
              <div className="viewsWrapper">
                <p>Views</p>
                <p className="likesAndView">{getPhoto?.views}</p>
              </div>
              <div className="downloadsWrapper">
                <p>Downloads</p>
                <p className="likesAndView">{getPhoto?.downloads}</p>
              </div>
            </div>
            <p>{`Published On ${getPhoto?.created_at}`}</p>
            <p>{getPhoto?.exif.name}</p>
            <p>Free to use Under the unsplash License</p>
            <div>
              <p className="topicsHeadingText">Related Photos</p>
              <RelatedPhotosgallery userId={userId} />
            </div>
            <div>
              <p className="topicsHeadingText">Related Collections</p>
              <SearchCollectionPhotoGallery
                collections={getPhoto?.related_collections}
              />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModelContainer;
