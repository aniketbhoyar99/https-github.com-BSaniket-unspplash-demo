import React, { useState } from "react";
import NavBarSection from "./components/NavBarSection";
import MenuBar from "./components/MenuBar";

const AppLayout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  return (
    <div>
      {isHeaderVisible && <NavBarSection />}
      {isHeaderVisible && <MenuBar />}
      {children}
    </div>
  );
};

export default AppLayout;
