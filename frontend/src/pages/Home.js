import React from "react";
import "./Home.scss";
import Header from "./page-components/Header";
import MainPage from "./page-components/MainPage";
import Footer from "./page-components/Footer";

const Home = () => {
  return (
    <>
      <div className="main_page">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </>
  );
};

export default Home;
