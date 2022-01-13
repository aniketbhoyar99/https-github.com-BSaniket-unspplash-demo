import React from "react";
import { User, Image, Users, Zap } from "react-feather";
import BadgeStatus from "./BadgeStatus";
import Avatar from "./Avatar";

const StatusBox = ({ topicData }) => {
  return (
    <div className="statusBoxWrapper">
      <div className="statusBoxContainer ">
        <div className="statusRow">
          <div className="iconAndLableSection">
            <Zap className="statusIcon" />
            <p className="statusLabel">Status </p>
          </div>
          <BadgeStatus statusValue={topicData?.status} />
        </div>

        <hr />

        <div className="statusRow">
          <div className="iconAndLableSection">
            <User className="statusIcon" />
            <p className="statusLabel">Curator </p>
          </div>
          <Avatar imgUrl={topicData?.owners} />
        </div>
        <hr />
        <div className="statusRow">
          <div className="iconAndLableSection">
            <Image className="statusIcon" />
            <p className="statusLabel">Contributions</p>
          </div>
          <div>
            <div className="totalPhotosStatus">{topicData?.total_photos}</div>
          </div>
        </div>
        <hr />
        <div className="statusRow">
          <div className="iconAndLableSection">
            <Users className="statusIcon" />
            <p className="statusLabel">Top contributors</p>
          </div>
          <Avatar imgUrl={topicData?.top_contributors} />
        </div>
      </div>
      <button className="statusSubmitBtn">{`Submit to ${topicData?.title}`}</button>
    </div>
  );
};

export default StatusBox;
