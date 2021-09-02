import React from "react";
import "./MainPage.scss";
import Modern from "../../images/mesdzid-scc.jpg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const BosniaModern = () => {
  return (
    <>
      <div className="main_middle">
        <img src={Modern} className="img_main" alt="modern"></img>

        <p id="first_paragraph_main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse interdum consectetur libero id. Eget arcu dictum varius
          duis at consectetur.
        </p>
        <div id="second_paragraph_main">
          <h3>Lorem ipsum</h3>
          <p>
            Eget duis at tellus at urna condimentum mattis pellentesque. Velit
            sed ullamcorper morbi tincidunt ornare. Pharetra magna ac placerat
            vestibulum lectus mauris ultrices eros. Vulputate sapien nec
            sagittis aliquam.
          </p>
        </div>
        <div className="main_page_btn">
          <Link to="/map" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Enter Map</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BosniaModern;
