import React,  { useState, useEffect } from 'react'

export default function HomePage(props) {

  const [pokeList, setPokeList] = useState({})


  function getPokemon(){
   
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then((res) => res.json())
    .then((pokemon) => {
      setPokeList(pokemon)})
    .catch((err) => console.error(err))
  }


  useEffect(() => {
    getPokemon()
  }, [])


  

  return (
    <main>
      <div className='poke-list'>
        {console.log(pokeList.pokemon)}
        { pokeList.pokemon ? pokeList.pokemon.map((poke) => {
        return (
        <div className='poke' key={poke.id}>
          <img src={poke.img} alt={poke.name} />
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
