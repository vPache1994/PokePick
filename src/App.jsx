import React, { useState } from 'react';
import './App.css'
import DataFetcher from './services/DataFetcher';
import { POKE_API } from './config.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 

  // Declarar el estado para el valor del cuadro de texto
  const [pokemon, setPokemon] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState(null);

  //controla el click
  const handleClick = () => {
    if (pokemon) {
      // Construir el endpoint usando el nombre del Pokémon
      setApiEndpoint(`${POKE_API}${pokemon.toLowerCase()}`);
    } else {
      setApiEndpoint(''); // Limpiar el endpoint si no hay nombre
    }
  };
  
  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setPokemon(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario
  };
  

  return (
    <>
      <p>What Pokémon do you want to search</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="inputPoke"
          type="text"
          id="texto-pokemon"
          value={pokemon}
          placeholder="Write your Pokémon"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleClick}>Buscar</button>
      </form>

      {/* Renderizar DataFetcher si apiEndpoint no es null */}
      {apiEndpoint && <DataFetcher apiEndpoint={apiEndpoint} />}
    </>
  )
}

export default App
