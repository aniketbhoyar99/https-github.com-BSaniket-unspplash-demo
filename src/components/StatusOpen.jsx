import React from 'react'

const StatusOpen = ({ statusValue }) => {
  return (
    <div>
      <button className="open">{statusValue}</button>
    </div>
  );
};

export default StatusOpen;
