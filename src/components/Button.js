import React, { useEffect, useState } from "react";
import axios from "axios";

const Button = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    console.log(submitted);
    if (submitted && pokemon.length < 807) {
      axios.get(url).then((response) => {
        setPokemon([...pokemon, ...response.data.results]);
        setUrl(response.data.next);
      });
    }
  }, [submitted, url]);

  const display = pokemon.map((item, i) => {
    return <div key={i}>{item.name}</div>;
  });
  const onClick = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form>
      <button onClick={onClick}> Fetch Pokemon</button>
      {display}
    </form>
  );
};
export default Button;
