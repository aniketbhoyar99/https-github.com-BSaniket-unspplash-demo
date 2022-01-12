import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavBarSection from "./components/NavBarSection";
import MenuBar from "./components/MenuBar";

const AppLayout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/demo") setIsHeaderVisible(false);
  }, [location]);
  
  return (
    <div>
      {isHeaderVisible && <NavBarSection />}
      {isHeaderVisible && <MenuBar />}
      {children}
    </div>
  );
};

export default AppLayout;
