import React, { useState, useEffect } from "react"
import "./styles/App.css"
import "./styles/Detail.css"
import Search from "./Search"
import { typeColors, upperFirstLetter, fillNumber } from "./utilities/Format"
import { fetchFunction } from "./utilities/Api"
import { Link } from "wouter"

export default function Detail({ params }) {
  const { pokemonName } = params
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      setLoading(true)
      const pokemonObject = await fetchFunction(url).catch((e) => e)
      setPokemon(pokemonObject)
      setLoading(false)
    }
    init()
  }, [url])

  return (
    <div className="App">
      <nav className="App_Nav">
        <Link href="/">Go back</Link>
        <Search />
      </nav>

      <div className="Detail_Content">
        {loading ? (
          <div>Loading...</div>
        ) : pokemon ? (
          <div>
            <div className="Detail_Banner">
              <h1>
                #{fillNumber(pokemon.id)} {upperFirstLetter(pokemon.name)}
              </h1>
              <div className="Detail_img_container">
                <img
                  alt={pokemon.sprites.front_default}
                  src={pokemon.sprites.front_default}
                />
                <div className="Card_Types">
                  {pokemon.types.map((type) => {
                    return (
                      <div
                        className="Card_Type"
                        key={type.type.name}
                        style={{ backgroundColor: typeColors[type.type.name] }}>
                        {upperFirstLetter(type.type.name)}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="Detail_Table">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Base Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon.stats.map((stat) => (
                    <tr key={stat.stat.name}>
                      <td>{upperFirstLetter(stat.stat.name)}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div class="Detail_Error">Pokemon not found</div>
        )}
      </div>
    </div>
  )
}
