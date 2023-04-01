import React,  { useState, useEffect } from 'react';
import { filterByProp, filterPokeListByType } from '../helpers/poke.helper';
import { Link } from 'react-router-dom';

export default function HomePage(props) {

  const [pokeList, setPokeList] = useState({})
  const [type, setType] = useState("")


  function getPokemon(){
   
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then((res) => res.json())
    .then((pokemon) => {
      console.log(pokemon)
      setPokeList(pokemon)})
    .catch((err) => console.error(err))
  }


  useEffect(() => {
    getPokemon()
  }, [])


  let types = filterByProp(pokeList.pokemon, "type")
  let flattenTypes = [].concat.apply([], types)
  let pokeType = [...new Set(flattenTypes.map((poke) => poke))]

  let filteredPokeList = filterPokeListByType(pokeList.pokemon, type)

  return (
    <main>
      <form>
          <label htmlFor="type">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} name="type" id="type">
            <option value="">All</option>
            {pokeType ? pokeType.map((type, idx) => {
              return <option key={idx} value={type}>{type}</option>
            }) : <></>}
          </select>
        </form>
      <div className='poke-list'>
        { filteredPokeList ? filteredPokeList.map((poke) => {
        return (
        <div className='poke' key={poke.id}>
          <Link 
            to={`/pokemon/${poke.name}`}
            state={
              {
                name: poke.name,
                img: poke.img,
                type: poke.type,
                weaknesses: poke.weaknesses,
                num: poke.num,
                height: poke.height,
                weight: poke.weight
              }}
          >
            <img src={poke.img} alt={poke.name} />
          </Link>
          <div className="poke-info">
            <p>{poke.num}</p>
            <h3>{poke.name}</h3>
            <div className='poke-type'>
              <p>{poke.type[0]}</p>
              <p>{poke.type[1]}</p>
            </div>
          </div>
        </div>) 
      }) : <>loading...</>}
      </div>
    </main>
  )
}
