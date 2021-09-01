import React, { useState } from "react";
import "./MainPage.scss";
import Tvrtko from "../../images/tvrtko_kotromanic.jpg";
import Sculpture from "../../images/photo-1601887389937-0b02c26b602c.jpg";
import { Grid } from "@material-ui/core";

const MainPage = () => {
  const [svg, setSvg] = useState(true);
  return (
    <>
      <section className="main_page_section">
        <h2>Learn it.</h2>
        <h1>History.</h1>

        <div className="main_middle">
          <img src={Sculpture} className="img_main"></img>

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
        </div>
        <div className="main_page_numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </section>
      {svg && (
        <svg>
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="svg_img_main">
              <path d="M.5,0C.24,0,0,.11,0,.24V.76C0,.89.24,1,.5,1S1,.89,1,.76V.24C1,.11.76,0,.5,0Z" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

export default MainPage;
