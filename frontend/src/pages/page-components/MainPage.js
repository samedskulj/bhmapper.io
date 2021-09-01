import React, { useState } from "react";
import "./MainPage.scss";
import BosniaMiddle from "./BosniaMiddle";
import BosniaOttoman from "./BosniaOttoman";
import BosniaModern from "./BosniaModern";

const MainPage = () => {
  const [svg, setSvg] = useState(true);
  const [pageAge, setPageAge] = useState("middleage");

  const changePageNumber = (history) => {
    setPageAge(history);
  };
  return (
    <>
      <section className="main_page_section">
        {pageAge === "middleage" && <BosniaMiddle></BosniaMiddle>}
        {pageAge === "ottoman" && <BosniaOttoman></BosniaOttoman>}
        {pageAge === "modernage" && <BosniaModern></BosniaModern>}

        <div className="main_page_numbers">
          <button
            onClick={() => changePageNumber("middleage")}
            className="btn_page"
          >
            01
          </button>
          <button
            onClick={() => changePageNumber("ottoman")}
            className="btn_page"
          >
            02
          </button>
          <button
            onClick={() => changePageNumber("modernage")}
            className="btn_page"
          >
            03
          </button>
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
