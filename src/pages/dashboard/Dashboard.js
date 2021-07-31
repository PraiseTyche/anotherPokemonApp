import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import * as api from "../../services/pokemonAPI";

import Dropdown from "../../components/dropdown/Dropdown";
import Paginate from "../../components/paginate/Paginate";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import Splash from "../../components/splash/Splash";

const Dashboard = ({ pokemonList, regionSelect, region }) => {
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  const regionsArray = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova"];

  const startingIndex = 15 * page - 15;
  const lastIndex = startingIndex + 15;
  let currentPosts = pokemonList.slice(startingIndex, lastIndex);

  useEffect(() => {
    fetchPageData();
  }, [page]);

  const onPageChange = (data) => {
    setIsLoading(true);
    setPage(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const fetchPageData = async () => {
    setIsLoading(true);
    try {
      const pageRes = await api.fetchPokemonDetailsList(currentPosts);
      setPosts(pageRes);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  const showData = () => {
    if (loading) {
      return <Splash type={"loading"} />;
    }
    if (error) {
      return <Splash type={"error"} />;
    }
    return <PokemonGrid pokemonList={posts} />;
  };

  return (
    <main className={styles.container}>
      <Dropdown
        title={region}
        options={regionsArray}
        regionSelect={regionSelect}
      />
      {showData()}
      <Paginate
        numberOfPokemon={pokemonList.length}
        page={page}
        onPageSelect={onPageChange}
        region={region}
      />
    </main>
  );
};

export default Dashboard;
