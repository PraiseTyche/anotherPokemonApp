import React from "react";
import styles from "./TabNav.module.css";

const TabNav = ({ tabs, selectTab, activeTab }) => {
  return (
    <div className={styles.tabsHeader}>
      <ul className={styles.tabsNavigation}>
        {tabs.map((tab) => {
          return (
            <li
              className={`${styles.tabsNavigationLink} ${
                tab === activeTab ? styles.activeTab : ""
              }`}
              key={tab}
              onClick={() => selectTab(tab)}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabNav;
