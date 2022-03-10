import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pokemons = () => {
  const [pokemon, setPokemon] = useState();

  const pokedex = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    setPokemon(response.data.results);
  };

  useEffect(() => {
    pokedex();
  }, []);

  // console.log(pokemon);
  return (
    <div>
      <h1>Pokedex!</h1>
      {!pokemon ? (
        <h1>"loading" </h1>
      ) : (
        pokemon.map((pokemon) => (
          <Link key={pokemon.name} to={`/discover/${pokemon.name}`}>
            <li>{pokemon.name}</li>
          </Link>
        ))
      )}
    </div>
  );
};
