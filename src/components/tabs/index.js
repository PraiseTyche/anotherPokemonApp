import React, { useState } from "react";
import TabBody from "./TabBody/TabBody";
import TabNav from "./TabNav/TabNav";
import styles from "./Tabs.module.css";
const Tabs = ({ pokemon }) => {
  const [activeTab, setActiveTab] = useState("General");
  const selectTabHandler = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.tabContainer}>
      <TabNav
        tabs={["General", "Stats", "Details"]}
        selectTab={selectTabHandler}
        activeTab={activeTab}
      />
      <TabBody activeContent={activeTab} pokemon={pokemon} />
    </div>
  );
};

export default Tabs;
