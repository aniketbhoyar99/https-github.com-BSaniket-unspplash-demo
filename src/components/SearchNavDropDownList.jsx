import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";
import { Square, Smartphone, CreditCard } from "react-feather";

const SearchNavDropDownList = ({
  btnName,
  DropDownListData,
  setOrientationData,
  className,
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
              <DropdownItem className="dropDownItem">
                <div
                  className="dropDownItemList"
                  onClick={() => setOrientationData(listData)}
                >
                  {listData.value === "landscape" ? <CreditCard className="orientationIcon"/> : ""}
                  {listData.value === "portrait" ? <Smartphone className="orientationIcon"/> : ""}
                  {listData.value === "squarish" ? <Square className="orientationIcon"/> : ""}
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
