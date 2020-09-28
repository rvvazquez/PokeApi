import React, { useState, useEffect } from "react"
import { fetchFunction, obtainPokemons } from "./utilities/Api"
import Card from "./Card"
import Search from "./Search"
import "./styles/List.css"

export default function List() {
  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState("")
  const [previous, setPrevious] = useState("")
  const initialUrl = `https://pokeapi.co/api/v2/pokemon/`

  useEffect(() => {
    async function init() {
      const allPokemons = await fetchFunction(
        localStorage.getItem("url") || initialUrl
      )
      if (localStorage.getItem("url")) localStorage.removeItem("url")
      setNext(allPokemons.next)
      setPrevious(allPokemons.previous)
      setPokemons(await obtainPokemons(allPokemons.results))
    }
    init()
  }, [initialUrl])

  async function prevPokemon() {
    localStorage.setItem("url", previous)
    const allPokemons = await fetchFunction(previous)
    setNext(allPokemons.next)
    setPrevious(allPokemons.previous)
    setPokemons(await obtainPokemons(allPokemons.results))
  }
  async function nextPokemon() {
    localStorage.setItem("url", next)
    const allPokemons = await fetchFunction(next)
    setNext(allPokemons.next)
    setPrevious(allPokemons.previous)
    setPokemons(await obtainPokemons(allPokemons.results))
  }

  return (
    <div>
      <nav className="List_Nav">
        {previous ? <button onClick={prevPokemon}>Previous</button> : <div />}
        {next ? <button onClick={nextPokemon}>Next</button> : <div />}
        <Search />
      </nav>

      <div className="grid">
        {pokemons.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </div>
  )
}
