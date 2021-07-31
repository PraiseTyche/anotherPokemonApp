import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchPokemonDetails,
  fetchPokemonSpecies,
  fetchPokemonTypeDetails,
} from "../../services/pokemonAPI";

import { formatPokemon } from "../../helper/pokemon";
import Splash from "../../components/splash/Splash";
import Tabs from "../../components/tabs";
import styles from "./PokemonPage.module.css";
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

const PokemonDetails = (props) => {
  let { id } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let getPokemonDetails = await fetchPokemonDetails(id);
        let getPokemonSpecies = await fetchPokemonSpecies(id);
        let pokemonTypesURL = getPokemonDetails.types[0].type.name;

        let getPokemonType = await fetchPokemonTypeDetails(pokemonTypesURL);
        let pokemon = formatPokemon(
          getPokemonDetails,
          getPokemonSpecies,
          getPokemonType
        );
        setPokemonDetails(pokemon);
        setImageSource(pokemon.imageURL);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  // const toggleImage = (source) => {
  //   setImageSource(source);
  // };

  if (loading) {
    return <Splash type={"loading"} />;
  }
  if (error) {
    return <Splash type={"error"} />;
  }
  return (
    <main className={styles.container}>
      <div
        className={styles.image_section}
        style={{ background: `${pokemonDetails.backgroundColor}` }}
      >
        <div className={styles.header}>
          <div className={styles.header_id}>
            <h2>#{pokemonDetails.formattedID}</h2>
          </div>
        </div>
        <div className={styles.image_container}>
          <div className={styles.image_box}>
            <img
              src={imageSource}
              alt={pokemonDetails.name}
              className={styles.pokemon_image}
            />
          </div>
        </div>
        <div className={styles.japanese_Heading}>
          <h3>{pokemonDetails.japaneseName}</h3>
        </div>
      </div>

      <div className={styles.details_section}>
        <Tabs pokemon={pokemonDetails} />
      </div>
    </main>
  );
};

export default PokemonDetails;
