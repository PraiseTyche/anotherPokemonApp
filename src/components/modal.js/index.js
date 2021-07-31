import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ imgSrc, bgColor, setSelectedIMG }) => {
  const handleClick = () => {
    setSelectedIMG(null);
  };
  return (
    <div className={styles.backdrop} onClick={() => handleClick()}>
      <div
        className={styles.modalImageContainer}
        style={{ background: `${bgColor}` }}
      >
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default Modal;
