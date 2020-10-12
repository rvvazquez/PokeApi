import React, {useEffect} from "react"
import Card from "./Card"
import {useListPokemons} from './hooks/useListPokemons'
import "./styles/List.css"
import Nav from "./Nav"


export default function List() {
  const {pokemons,setPokemons} = useListPokemons()


  useEffect(() => {
        
    console.log(pokemons)
    
    
  }, [pokemons])

  console.log(pokemons)
  return (
    <div>
     <Nav setPokemons={setPokemons}/>

      <div className="grid">
        {pokemons.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </div>
  )
}
