import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useLazyGetPhotosListQuery } from '../../../redux/UnsplashApi';
import "./MenuBar.css";

const breakPoints = [
  { width: 320, itemsToShow: 1 },
  { width: 460, itemsToShow: 2 },
  { width: 512, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 9 },
];

const MenuBar = () => {
const [getTopicsList, { data: topicsList = [] }] = useLazyGetPhotosListQuery();
const loaction=useLocation();
const { pathname } = loaction;
  useEffect(() => {
    getTopicsList({ entity: "topics" });
  }, []);
  
  return (
    <div>
      <div className="carouselWrapper">
        <Nav navbar>
          <NavItem className="editorialNavItem">
            <NavLink
              className="MenuBarLinkText"
              to="/"
              activeClassName={pathname === "/" ? "active--link" : ""}
            >
              Editorial
            </NavLink>
          </NavItem>
        </Nav>
        <div className="pipeLine" />
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          className="carouselBtn"
        >
          {topicsList?.map((item, index) => (
            <NavLink
              className="MenuBarLinkText"
              to={`/t/${item.slug}`}
              activeClassName={
                pathname === `/t/${item.slug}` ? "active--link" : ""
              }
              key={index}
            >
              {item.title}
            </NavLink>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuBar;
