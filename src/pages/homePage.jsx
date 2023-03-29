import React,  { useState, useEffect } from 'react'

export default function HomePage(props) {

  const [pokeList, setPokeList] = useState({})

  function getPokemon(){
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then((res) => res.json())
    .then((pokemon) => {
      return setPokeList(pokemon)})
    .catch((err) => console.error(err))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <main>
      <div className='poke-list'>
      {Object.entries(pokeList)[0][1].map((poke) => {
        return (
        <div className='poke' key={poke.id}>
          <img src={poke.img} alt={poke.name} />
          <p>{poke.num}</p>
          <h3>{poke.name}</h3>
          <p>{poke.type[0]}</p>
          <p>{poke.type[1]}</p>
        </div>)
      })}
      </div>
    </main>
  )
}
