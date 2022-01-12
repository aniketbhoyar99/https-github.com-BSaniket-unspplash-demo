import React from "react";
import { User, Image, Users, Zap } from "react-feather";
import StatusOpen from "./StatusOpen";
import Avatar from "./Avatar";

const StatusBox = ({ topicData }) => {
  return (
   
      <div className="statusBoxWrapper ">
        <div className="statusRow">
          <div className="iconAndLableSection">
            <Zap />
            <p className="statusLabel">Status </p>
          </div>
          <StatusOpen statusValue={topicData?.status} />
        </div>

        <hr />

        <div className="statusRow">
          <div className="iconAndLableSection">
            <User />
            <p className="statusLabel">Curator </p>
          </div>
          <Avatar imgUrl={topicData?.owners} />
        </div>
        <hr />
        <div className="statusRow">
          <div className="iconAndLableSection">
            <Image />
            <p className="statusLabel">Contributions</p>
          </div>
          <div className="">
            <div>{topicData?.total_photos}</div>
          </div>
        </div>
        <hr />
        <div className="statusRow">
          <div className="iconAndLableSection">
            <Users />
            <p className="statusLabel">Top contributors</p>
          </div>
          <Avatar imgUrl={topicData?.top_contributors} />
        </div>
      </div>
  );
};

export default StatusBox;
