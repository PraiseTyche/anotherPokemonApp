import React from "react";
import DetailsContent from "../Content/Details";
import GeneralContent from "../Content/General/GeneralContent";
import StatsContent from "../Content/Stats";
import styles from "./TabBody.module.css";
const TabBody = ({ activeContent, pokemon }) => {
  return (
    <div className={styles.contentContainer}>
      <div
        className={`${
          activeContent === "General"
            ? styles.activeContent
            : styles.inactiveContent
        }`}
      >
        <GeneralContent pokemon={pokemon} />
      </div>
      <div
        className={`${
          activeContent === "Stats"
            ? styles.activeContent
            : styles.inactiveContent
        }`}
      >
        <StatsContent pokemon={pokemon} />
      </div>
      <div
        className={`${
          activeContent === "Details"
            ? styles.activeContent
            : styles.inactiveContent
        }`}
      >
        <DetailsContent pokemon={pokemon} />
      </div>
    </div>
  );
};

export default TabBody;
