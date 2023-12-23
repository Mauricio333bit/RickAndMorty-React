import imgRickAndMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/character";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character"); //peticion a la api
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title mt-3">
          Rick<span>and</span>Morty
        </h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imgRickAndMorty} className="img-home" alt="rick&morty" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </> //operador ternario, si caracteres no está vacio muestro el componente characters, sino muestro la imagen y boton
        )}
      </header>
    </div>
  );
}

export default App;
