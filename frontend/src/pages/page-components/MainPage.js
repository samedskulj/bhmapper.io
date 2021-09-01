import React from "react";
import "./MainPage.scss";
import Tvrtko from "../../images/tvrtko_kotromanic.jpg";
const MainPage = () => {
  return (
    <>
      <section className="main_page_section">
        <h2>Learn it.</h2>
        <h1>History.</h1>
        <div className="main_middle">
          <img src={Tvrtko}></img>
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
      </section>
    </>
  );
};

export default MainPage;
