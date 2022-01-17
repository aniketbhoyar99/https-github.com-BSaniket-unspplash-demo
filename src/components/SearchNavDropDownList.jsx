import React from 'react'
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

const SearchNavDropDownList = ({ btnName, DropDownListData }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <ButtonDropdown toggle={toggle} isOpen={dropdownOpen}>
        <DropdownToggle
          caret
          className="DropdownToggleBtn"
        >
          {btnName}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{btnName}</DropdownItem>
          {DropDownListData.map((listData) => {
            return <DropdownItem header>{listData}</DropdownItem>;
          })}
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
};

export default SearchNavDropDownList;
