import React from "react";
import Carousel from "react-elastic-carousel";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useGetTopicsListQuery } from "../redux/UnsplashApi";
import "../css/MenuBar.css";

const breakPoints = [
  { width: 320, itemsToShow: 1 },
  { width: 460, itemsToShow: 2 },
  { width: 512, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 9 },
];

const MenuBar = () => {
  const { data } = useGetTopicsListQuery();
  
  return (
    <div>
      <div className="carouselWrapper">
        <Nav navbar>
          <NavItem className="editorialNavItem">
            <NavLink className="MenuBarLinkText" to="/">
              Editorial
            </NavLink>
          </NavItem>
        </Nav>
        <div className="pipeLine" />
        <Carousel breakPoints={breakPoints} pagination={false}>
          {data?.map((item) => (
            <Nav navbar>
              <NavItem>
                <NavLink className="MenuBarLinkText" to={`/t/${item.slug}`}>
                  {item.title}
                </NavLink>
              </NavItem>
            </Nav>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuBar;
