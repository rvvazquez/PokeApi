import {useState,useEffect} from 'react'
import { fetchFunction, obtainPokemons } from "../utilities/Api"



export  function useListPokemons (){
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

    

    return {pokemons,setPokemons,next,setNext,previous,setPrevious}
}