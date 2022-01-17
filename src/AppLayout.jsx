import React, { useState, useEffect } from "react";
import NavBarSection from "./components/NavBarSection";
import MenuBar from "./components/MenuBar";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(true);
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    if (path === "s") setIsMenuBarVisible(false);
  }, [location]);

  return (
    <div>
      {isHeaderVisible && <NavBarSection />}
      {isMenuBarVisible && <MenuBar />}
      {children}
    </div>
  );
};

export default AppLayout;
