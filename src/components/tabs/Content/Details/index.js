import React from "react";
import styles from "./DetailsContent.module.css";
const DetailsContent = ({ pokemon }) => {
  const { eggGroups, pokemonAbilities } = pokemon;
  let eggGroupString;
  if (eggGroups.length > 1) {
    eggGroupString = eggGroups.join(", ");
  } else {
    eggGroupString = eggGroups.join();
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.detailsContainer}>
        <h3>Height: </h3>
        <p>{pokemon.height}ft</p>
      </div>
      <div className={styles.detailsContainer}>
        <h3>Weight: </h3>
        <p>{pokemon.weight}lbs</p>
      </div>
      <div className={styles.detailsContainer}>
        <h3>Happiness: </h3>
        <p>{pokemon.happiness}%</p>
      </div>

      <div className={styles.detailsContainer}>
        <h3>Hatch Counter: </h3>
        <p>{pokemon.hatchCounter} steps</p>
      </div>
      <div className={styles.detailsContainer}>
        <h3>Egg Groups: </h3>
        <p>{eggGroupString}</p>
      </div>
      <div className={styles.detailsContainer}>
        <h3>Capture Rate: </h3>
        <p>{pokemon.captureRate}/255</p>
      </div>
      <div className={styles.detailsContainer}>
        <h3>Growth Rate: </h3>
        <p>{pokemon.growthRate}</p>
      </div>
    </div>
  );
};

export default DetailsContent;
