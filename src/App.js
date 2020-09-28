import React from "react"
import "./styles/App.css"
import Detail from "./Detail"
import List from "./List"

import { Switch, Route } from "wouter"

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:pokemonName" component={Detail}></Route>
        <Route component={List}></Route>
      </Switch>
    </div>
  )
}
