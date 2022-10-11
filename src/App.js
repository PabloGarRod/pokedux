import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { getPokemon } from './api';
import { setPokemons } from './actions';
import Searcher from './Components/Searcher';
import PokemonList from './Components/PokemonList';
import logo from "./statics/logo.svg"
import './App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchPokemons = async () => {
      const PokemoRes = await getPokemon();
      dispatch(setPokemons(PokemoRes));
    };

    fetchPokemons();
  }, [])
  return (
    
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}


export default App;
