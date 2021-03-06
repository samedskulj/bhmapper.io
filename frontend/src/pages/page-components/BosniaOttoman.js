import React from "react";
import "./MainPage.scss";
import Ottoman from "../../images/Istanbul_1.jpg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const BosniaOttoman = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.1,
            x: { type: "tween", stiffness: 100 },
          }}
          className="main_middle"
        >
          <img src={Ottoman} className="img_main" alt="ottoman"></img>

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
              <motion.button
                style={{
                  appearance: "none",
                  background: "none",
                  border: "none",
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
              >
                <Button variant="contained" color="secondary">
                  Enter Map
                </Button>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default BosniaOttoman;
