import React from 'react';
import './styles/Card.css';
import {typeColors,upperFirstLetter,fillNumber} from './utilities/Format'
import {Link} from 'wouter'




export default function Card ({pokemon}) {
    const url=`/${pokemon.name}`

    return (
        <Link href={url}>
            <div className="Card fade-in" >
                <div className="Card_Banner">#{fillNumber(pokemon.id)} {upperFirstLetter(pokemon.name)}</div>
                <div className="Card_Black_Line"></div>
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
        </Link>
        
    );

    
}