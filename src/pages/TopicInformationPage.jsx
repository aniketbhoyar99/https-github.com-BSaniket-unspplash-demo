import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useLazyGetTopicQuery,
  useLazyGetTopicsPhotosQuery,
} from "../redux/UnsplashApi";
import DescriptionSection from "../components/DescriptionSection";
import StatusBox from "../components/StatusBox";
import PhotoGallery from "../components/PhotoGallery";
import "../css/DescriptionBoxAndStatusBox.css";
import "../css/PhotoGallery.css";

const TopicInformationPage = () => {
  const params = useParams();
  const { topicInformationPage } = params;
  const [getTopic, { data: topicData }] = useLazyGetTopicQuery();
  const [getTopicsPhotos, { data: photos ,isLoading}] = useLazyGetTopicsPhotosQuery();

  useEffect(() => {
    getTopic(topicInformationPage);
    getTopicsPhotos(topicInformationPage);
  }, [topicInformationPage]);

 
   return (
     <div>
        <div className="descriptionAndStatusBoxWrapper">
         <DescriptionSection topicData={topicData && topicData} />
         <StatusBox topicData={topicData && topicData} />
       </div>
       <div className="photoGAlleryWapper">
        {isLoading?"isLoading..............": <PhotoGallery photos={photos} />}
       </div>
     </div>
   );
};

export default TopicInformationPage;
