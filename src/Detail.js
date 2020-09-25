import React, { useState, useEffect }from 'react'
import './styles/App.css';
import './styles/Detail.css';
import {typeColors,upperFirstLetter,fillNumber} from './utilities/Format'


import { fetchFunction} from './utilities/Api';
import {Link} from 'wouter';


export default function Detail({params}) {
    const {pokemonName}=params
    const url= `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const [pokemon, setPokemon] = useState()
    

    useEffect(() => {
        async function init() {
          const pokemonObject = await fetchFunction(url)

          setPokemon(pokemonObject)
        }
        init()
      }, [url])

    return(
        
        pokemon?<div className="App">
      <nav className="App_Nav">
        
        <Link href="/">Go back</Link>
      </nav>
     
      <div className='Detail_Content'>
        <div className='Detail_Banner'>
          <h1>#{fillNumber(pokemon.id)} {upperFirstLetter(pokemon.name)}</h1>
          <div className='Detail_img_container'>
            <img alt={pokemon.sprites.front_default} src={pokemon.sprites.front_default}/>
            <div className="Card_Types">
                    {
                        pokemon.types.map((type)=> {
                            return (
                                <div className="Card_Type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                    {upperFirstLetter(type.type.name)}
                                </div>
                            )
                        })
                    }
                </div>
          </div>
          

        </div>

        <div className='Detail_Table'>
          <table className='content-table'>
            <thead>
              <tr>
                <th>Stat</th>
                <th>Base Value</th>
              </tr>
            </thead>
            <tbody>
                    {pokemon.stats.map(stat=><tr><td>{upperFirstLetter(stat.stat.name)}</td><td>{stat.base_stat}</td></tr>)}
            </tbody>
          
          </table>     
        
        </div>
        
      </div>

      
    </div>:<div></div>
    )
}