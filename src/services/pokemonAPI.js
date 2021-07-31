import axios from "axios";
import { pokemonTypes } from "../helper/pokemonIcons";
import { regions } from "../helper/regions";
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const fetchPokemonList = async (region) => {
  let regionInfo = regions.find((reg) => {
    return region === reg.region;
  });
  try {
    const res = await api.get(
      `pokemon?limit=${regionInfo.numberOfPokemon}&offset=${
        regionInfo.start - 1
      }.`
    );

    // const res = await api.get(`/pokemon?limit=${9}&offset=${0}.`);

    const pokemonList = res.data.results;
    // const _pokemonDetails = dataArray.map(async (pokemon) => {
    //   const res = await fetch(pokemon.url);
    //   const response = await res.json();
    //   return response;
    // });
    // const details = await Promise.all(_pokemonDetails);

    return pokemonList;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchPokemonDetailsList = async (arr) => {
  try {
    const _pokemonDetails = arr.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const response = await res.json();
      return response;
    });
    const details = await Promise.all(_pokemonDetails);
    return details;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchPokemonDetails = async (pokemonID) => {
  try {
    const pokemonDetailsRequest = await api.get(`/pokemon/${pokemonID}`);
    const pokemonDetailsData = await pokemonDetailsRequest.data;
    return pokemonDetailsData;
  } catch (err) {
    console.log(err);
    return {
      error: true,
    };
  }
};

export const fetchPokemonSpecies = async (pokemonID) => {
  try {
    const pokemonSpeciesRequest = await api.get(
      `pokemon-species/${pokemonID}/`
    );
    const pokemonSpeciesDetails = await pokemonSpeciesRequest.data;
    return pokemonSpeciesDetails;
  } catch (err) {
    return {
      error: true,
    };
  }
};

export const fetchPokemonTypeDetails = async (type) => {
  try {
    const pokemonTypeDetails = await api.get(`type/${type}`);
    return pokemonTypeDetails.data.damage_relations;
  } catch (err) {
    console.log(err);
  }
};
