import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState("ditto");

  function loadApi() {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPokemon(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadApi();
    console.log(pokemon);
  }, []);

  function handleSearch() {
    loadApi();
  }

  return (
    <div className="container">
      <header>
        <strong>Pokemon API</strong>
      </header>
      <div>
        <input
          type="text"
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={handleSearch}>buscar</button>
      </div>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div>Name: {pokemon.name}</div>
          <div>N°: {pokemon.id}</div>
          <div>Peso: {pokemon.weight / 10}kg</div>
          <div>Altura: {pokemon.height / 10}m</div>
        </div>
      )}
    </div>
  );
}

export default App;
