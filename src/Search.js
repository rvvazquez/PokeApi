import React, {useState} from 'react'
import {useLocation} from 'wouter'
import './styles/Search.css'



export default function Search(){

    const [value,setValue]=useState()
    const [,pushLocation]=useLocation()

    const handleSubmit=evt=>{
        evt.preventDefault()
        pushLocation(`/${value}`)

    }

    const handleChange=evt=>{
        setValue(evt.target.value)

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search by name or index pokemon' onChange={handleChange} />
            </form>
        </div>
    );
}