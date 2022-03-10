import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DiscoverPage = () => {
  const [link, setLink] = useState([]);

  const params = useParams();
  // console.log(params);

  const linkedPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    // console.log(response.data.sprites);
    // console.log(response.data.abilities[0].ability.name);
    setLink(response.data);
  };

  useEffect(() => {
    linkedPokemon();
  }, []);

  return (
    <div>
      <p>name: {params.name}</p>
      {!link ? (
        <h1>"loading"</h1>
      ) : (
        <img alt=":img" src={link.sprites?.front_default} />
      )}
    </div>
  );
};
