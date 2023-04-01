import React from 'react'
import { useLocation } from 'react-router-dom'

export default function PokemonPage(props) {

  let {state} = useLocation()
  console.log(state.type)
  return (
    <div className='poke-page'>
      <header className='poke-header'>
        <h1>{state.name}</h1>
        <h3>#{state.num}</h3>
      </header>
      <img className='poke-img' src={state.img} alt={state.name} />
      <div className="stats">
        <div className="height">Height: {state.height}</div>
        <div className="weight">Weight: {state.weight}</div>
        <div className="type">Type: {state.type.map((types,idx) => {
          return <span key={idx}>{types}</span>
        })}</div>
        <div className="weaknesses">Weaknesses: {state.weaknesses.map((weakness, idx) => {
          return <span key={idx}>{weakness}</span>
        })}</div>
      </div>
    </div>
  )
}
