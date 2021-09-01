import React, { useState } from "react";
import "./Header.scss";
import ReorderIcon from "@material-ui/icons/Reorder";
const Header = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <>
      <nav className="nav_bhmapper">
        <div className="nav_brand">
          <p>bhmapper</p>
        </div>
        <div className="nav_links" id={showLinks ? "hidden" : ""}>
          <a href="/">Home</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </div>
        <div onClick={() => setShowLinks(!showLinks)} className="nav_icon">
          <ReorderIcon />
        </div>
      </nav>
    </>
  );
};

export default Header;
