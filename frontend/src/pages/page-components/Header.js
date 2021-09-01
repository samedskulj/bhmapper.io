import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <nav className="nav_bhmapper">
        <div className="nav_brand">
          <p>bhmapper</p>
        </div>
        <div className="nav_links">
          <a href="/">Home</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
