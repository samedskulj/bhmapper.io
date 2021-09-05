import React from "react";
import "./Home.scss";
import Header from "./page-components/Header";
import MainPage from "./page-components/MainPage";
import Footer from "./page-components/Footer";
import { AnimatePresence, motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="main_page">
            <Header />
            <MainPage />
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
