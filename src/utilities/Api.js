
export async function fetchFunction (url){

    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(response=>resolve(response))
        .catch(error=>reject(error))
    })

}


export async function obtainPokemons (pokemonsArray){

    return await Promise.all(pokemonsArray.map(async pokemon=>{

        const result=   await fetchFunction(pokemon.url)
        return  result
    })
    )
    

}


