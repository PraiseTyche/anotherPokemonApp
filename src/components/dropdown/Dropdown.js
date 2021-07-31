import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Dropdown = ({ title, options, regionSelect }) => {
  const [open, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!open);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className={styles.ddWrapper} onClick={() => toggle(!open)}>
        <div className={styles.ddHeader} role="button" tabIndex={0}>
          <div className={styles.ddHeader_title}>
            <p>Region: {title}</p>
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
        {open && (
          <ul className={styles.ddList}>
            {options.map((opt) => {
              if (opt === title) {
                return;
              }

              return (
                <li
                  className={`${styles.ddListItem}`}
                  key={opt}
                  onClick={() => regionSelect(opt)}
                >
                  {opt}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
