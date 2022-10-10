import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import Searcher from './Components/Searcher';
import PokemonList from './Components/PokemonList';
import logo from "./statics/logo.svg"
import './App.css';

function App({ pokemons, setPokemons }) {
  console.log(pokemons);
  useEffect(()=> {
    const fetchPokemons = async () => {
      const PokemoRes = await getPokemon();
      setPokemons(PokemoRes);
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

const mapStateToProps = ((state) => ({
  pokemons: state.pokemons,
}))

const mapDispatchToProps = (dispatch) => ({
    setPokemons: (values) => dispatch(setPokemonsActions(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
