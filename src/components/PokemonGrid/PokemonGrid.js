import React from "react";
import styles from "./PokemonGrid.module.css";

import Card from "../Cards/Card";

const PokemonGrid = ({ pokemonList }) => {
  return (
    <div className={styles.container}>
      {pokemonList.map((pokemon) => {
        return <Card pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};

export default PokemonGrid;
