import React from "react";
import "./Footer.scss";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";

const Footer = () => {
  return (
    <>
      <section className="footer_main">
        <div className="acc_links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            FB
          </a>
          <p>/</p>
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            TW
          </a>
          <p>/</p>
          <a href="https://www.instagram.com/">IG</a>
        </div>
        <div className="icon_history">
          <HistorySharpIcon fontSize="large"></HistorySharpIcon>
        </div>
      </section>
    </>
  );
};

export default Footer;
