import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetPhotosListQuery } from "../../redux/UnsplashApi";
import DescriptionSection from "../../components/topicInformationPage/DescriptionSection";
import StatusBox from "../../components/topicInformationPage/statusBox/StatusBox";
import PhotoGallery from "../../components/commen/photoGallery/PhotoGallery";
import "../../components/topicInformationPage/DescriptionBoxAndStatusBox.css";
import "../../components/commen/photoGallery/PhotoGallery.css";

const TopicInformationPage = () => {
  const params = useParams();
  const { topicInformationPage } = params;
  const [getTopic, { data: topicData }] = useLazyGetPhotosListQuery();
  const [getTopicsPhotos, { data: topicsPhotos, isLoading }] =
    useLazyGetPhotosListQuery();

  useEffect(() => {
    getTopic({ entity: "topics", userId: topicInformationPage });
    getTopicsPhotos({
      entity: "topics",
      userId: topicInformationPage,
      subEntity: "photos",
    });
  }, [topicInformationPage]);

  return (
    <div>
      <div className="descriptionAndStatusBoxWrapper">
        <DescriptionSection topicData={topicData && topicData} />
        <StatusBox topicData={topicData && topicData} />
      </div>
      <div className="photoGAlleryWapper">
        {isLoading ? (
          "Loading.............."
        ) : (
          <PhotoGallery photos={topicsPhotos} />
        )}
      </div>
    </div>
  );
};

export default TopicInformationPage;
