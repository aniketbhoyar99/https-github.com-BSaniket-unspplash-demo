import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "react-feather";
import Searchbar from "../searchBar/Searchbar";
import Popover from "../../popOver/Popover";
import "../navBarSection/NavBar.css";

const NavBarSection = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <svg
            width="32"
            height="32"
            className="hic6U"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </NavbarBrand>
        <Nav className="me-auto nav" style={{ flexWrap: "nowrap" }}>
          <NavItem>
            <Searchbar
              placeholder="Search free high-resolution photos"
              isRounded
            />
          </NavItem>
          <Nav className="topNavLinkTextWrapper" navbar>
            <NavItem>
              <NavLink
                className="topNavLinkText"
                to="/explore"
              >
                Explore
              </NavLink>
            </NavItem>
          </Nav>
        </Nav>
        <Menu id="PopoverLegacy" className="menuIcon" type="button" />
        <Popover PopoverFocusId="PopoverLegacy" />
      </Navbar>
    </>
  );
};

export default NavBarSection;
