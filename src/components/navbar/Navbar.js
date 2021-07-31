import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>[Pokedex]</h1>
    </div>
  );
};

export default Navbar;
