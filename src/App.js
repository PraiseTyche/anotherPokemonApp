import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import * as api from "./services/pokemonAPI";

import "./index.css";
import Navbar from "./components/navbar/Navbar";
import PokemonDetails from "./pages/pokemon/PokemonDetails";
import Dashboard from "./pages/dashboard/Dashboard";
import Splash from "./components/splash/Splash";

const App = () => {
  const [region, setRegion] = useState("Kanto");
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPokemonList();
  }, [region]);

  const fetchPokemonList = async () => {
    try {
      setLoading(true);
      const pokemonListRequest = await api.fetchPokemonList(region);
      setPokemonList(pokemonListRequest);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  const handleRegionSelect = (region) => {
    setRegion(region);
  };

  if (loading || pokemonList.length === 0) {
    return <Splash type={"loading"} />;
  }
  if (error) {
    <Splash type={"error"} />;
  }

  return (
    <div className={"appContainer"}>
      <Navbar />
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard
            pokemonList={pokemonList}
            region={region}
            regionSelect={handleRegionSelect}
          />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>

        <Route>
          <Splash type={"not found"} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
