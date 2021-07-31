import React from "react";
import styles from "./StatsContent.module.css";
const StatsContent = ({ pokemon }) => {
  const { stats } = pokemon;
  const total =
    stats.hp +
    stats.attack +
    stats.speed +
    stats.defense +
    stats.specialDefense +
    stats.specialAttack;
  return (
    <div className={styles.contentContainer}>
      <h1>Base Stats.</h1>
      <div className={styles.statContainer}>
        <h3>HP:</h3>
        <p>{stats.hp}</p>
      </div>
      <div className={styles.statContainer}>
        <h3>Attack:</h3>
        <p>{stats.attack}</p>
      </div>
      <div className={styles.statContainer}>
        <h3>Defense:</h3>
        <p>{stats.defense}</p>
      </div>
      <div className={styles.statContainer}>
        <h3>Speed: </h3>
        <p>{stats.speed}</p>
      </div>
      <div className={styles.statContainer}>
        <h3>Special Attack: </h3>
        <p>{stats.specialAttack}</p>
      </div>
      <div className={styles.statContainer}>
        <h3>Special Defense:</h3>
        <p>{stats.specialDefense}</p>
      </div>
      <div className={styles.statContainer}>
        <h3>Total: </h3>
        <p>{total}</p>
      </div>

      <div className={styles.genderRatioContainer}>
        <h3>Gender Ratio: </h3>
        {pokemon.genderRationMale && pokemon.genderRationFemale !== 0 ? (
          <>
            <p className={styles.genderRatioText}>
              Male: <span>{pokemon.genderRationMale}%</span>
            </p>
            <p className={styles.genderRatioText}>
              Female: <span>{pokemon.genderRationFemale}%</span>
            </p>
          </>
        ) : (
          <>
            <p className={styles.genderRatioText}>Genderless.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StatsContent;
