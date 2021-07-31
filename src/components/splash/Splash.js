import React from "react";
import styles from "./Splash.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Splash = ({ type }) => {
  const splashType = () => {
    if (type === "loading") {
      return (
        <>
          <div>
            <img src="/img/loading.png" alt={"loaing img"} />
          </div>
          <div>
            <h1>...Loading</h1>
          </div>
        </>
      );
    }
    if (type === "error") {
      return (
        <>
          <div>
            <img src="/img/error.png" alt={"errror img"} />
          </div>
          <div>
            <h1>Something Went wrong....</h1>
          </div>
        </>
      );
    }

    if (type === "not found") {
      return (
        <>
          <div>
            <img src="/img/error.png" alt={"loaing img"} />
          </div>
          <div>
            <h1>Page Not Found.</h1>
            <Link to={"/"} className={styles.homeBTN}>
              Go Home
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      exit={{ opacity: 0, x: -100 }}
    >
      {splashType()}
    </motion.div>
  );
};

export default Splash;
