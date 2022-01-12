import React from 'react'

const BadgeStatus = ({ statusValue }) => {
  return (
    <div>
      <button className="openBadg">{statusValue}</button>
    </div>
  );
};

export default BadgeStatus;
