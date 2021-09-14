import './App.css';
import pokemon from './pokemon';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Pokedex</h1>
      <Pokedex allPokemon={pokemon} />
    </div>
  );
}

export default App;
