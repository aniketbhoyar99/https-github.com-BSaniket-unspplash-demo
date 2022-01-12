import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetTopicQuery } from "../redux/UnsplashApi";
import DescriptionSection from "../components/DescriptionSection";
import StatusBox from "../components/StatusBox";
import "../css/DescriptionBoxAndStatusBox.css";

const LinksRoutepage = () => {
  const params = useParams();
  const { linksRoutepage } = params;
  const [getTopic, { data :topicData}] = useLazyGetTopicQuery();

  useEffect(() => {
    getTopic(linksRoutepage);
  }, [linksRoutepage]);

  return (
    <div className="descriptionAndStatusBoxWrapper">
      <DescriptionSection topicData={topicData && topicData} />
      <StatusBox topicData={topicData && topicData} />
    </div>
  );
};

export default LinksRoutepage;
