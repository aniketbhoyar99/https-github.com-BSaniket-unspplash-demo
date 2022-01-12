import React from "react";
import { Twitter, Instagram, Facebook } from "react-feather";
import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";
const Popover = ({ PopoverFocusId }) => {
  return (
    <div>
      <UncontrolledPopover
        placement="bottom"
        target={PopoverFocusId}
        trigger="legacy"
      >
        <PopoverHeader>Focus Trigger</PopoverHeader>
        <PopoverBody>
          <div className="topNavPopoverBody">
            <Twitter />
            <Instagram />
            <Facebook />
          </div>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Popover;
