import React from "react";
import styles from "./Card.module.css";
import { pokemonTypes } from "../../helper/pokemonIcons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const backgroundColors = {
  bug: "#819A29",
  dark: "#375E67",
  dragon: "#375E67",
  ghost: "#64539C",
  rock: "#906543",
  steel: "#8D8BA7",
  flying: "#799FF1",
  water: "#649EE2",
  ice: "#68D4E7",
  grass: "#5D836A",
  fire: "#F08353",
  electric: "#EFBD34",
  normal: "#ADA184",
  fighting: "#79322D",
  fairy: "#F682E7",
  psychic: "#EF4D83",
  poison: "#823E9F",
  ground: "#B58E49",
};

const Card = ({ pokemon }) => {
  let formatId = pokemon.id.toString().padStart(3, "0");
  const nameCapitalized =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const type = pokemon.types.map((item) => {
    return item.type.name;
  });
  let colors = type[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className={styles.card}
    >
      <Link to={`/pokemon/${pokemon.id}`} className={styles.link}>
        <div
          className={styles.imgContainer}
          style={{ background: backgroundColors[colors] }}
        >
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon"
          />
        </div>
        <div className={styles.cardDetails}>
          <h3 className={styles.pokeName}>{nameCapitalized}</h3>
          <h5 className={styles.pokeID}>#{formatId}</h5>
          <div className={styles.icon}>
            {type.map((type) => {
              return (
                <div
                  className={styles.iconContainer}
                  style={{ background: backgroundColors[type] }}
                  key={type}
                >
                  <img
                    src={pokemonTypes[type]}
                    width="25px"
                    alt={"pokemon type icon"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
