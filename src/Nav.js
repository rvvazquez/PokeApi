import React from "react"
import Search from "./Search"
import "./styles/Nav.css"
import { fetchFunction, obtainPokemons } from "./utilities/Api"
import { useListPokemons } from "./hooks/useListPokemons"
import { Link, Route } from "wouter"

export default function Nav({ setPokemons }) {
  const { previous, next, setNext, setPrevious } = useListPokemons()

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
      <Route path="/:pokemonName">
        <nav className="App_Nav">
          <Link href="/">Go back</Link>
          <Search />
        </nav>
      </Route>
      <Route path="/">
        <nav className="List_Nav">
          {previous ? <button onClick={prevPokemon}>Previous</button> : <div />}
          {next ? <button onClick={nextPokemon}>Next</button> : <div />}
          <Search />
        </nav>
      </Route>
    </div>
  )
}
