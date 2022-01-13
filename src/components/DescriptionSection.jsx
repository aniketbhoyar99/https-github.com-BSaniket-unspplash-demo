import React from "react";

const DescriptionSection = ({ topicData }) => {
  return (
    <div className="descriptionBox">
      <p className="descriptionBoxTitle">{topicData?.title}</p>
      <p className="descriptionBoxDescription">{topicData?.description}</p>
    </div>
  );
};

export default DescriptionSection;
