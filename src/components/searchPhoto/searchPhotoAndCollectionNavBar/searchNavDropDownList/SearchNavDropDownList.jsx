import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";
import { Square, Smartphone, CreditCard } from "react-feather";
import "../../searchPhotoAndCollectionNavBar/searchNavDropDownList/SearchNavDropDownList.css";

const SearchNavDropDownList = ({
  btnName,
  DropDownListData,
  setOrientationData,
  className,
  setClear,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <>
      <ButtonDropdown toggle={toggle} isOpen={dropdownOpen}>
        <DropdownToggle caret className={className}>
          {btnName}
        </DropdownToggle>
        <DropdownMenu>
          {DropDownListData.map((listData, index) => {
            return (
              <DropdownItem className="dropDownItem" key={index}>
                <div
                  className="dropDownItemList"
                  onClick={() => {
                    setClear("");
                    setOrientationData(listData);
                  }}
                  key={index}
                >
                  {listData.value === "landscape" ? (
                    <CreditCard className="orientationIcon" />
                  ) : (
                    ""
                  )}
                  {listData.value === "portrait" ? (
                    <Smartphone className="orientationIcon" />
                  ) : (
                    ""
                  )}
                  {listData.value === "squarish" ? (
                    <Square className="orientationIcon" />
                  ) : (
                    ""
                  )}
                  {listData.label}
                </div>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </ButtonDropdown>
    </>
  );
};

export default SearchNavDropDownList;
