import React, { Component } from 'react'
import './App.css'
import PercentBar from './ReuseComponent/PercentBar';

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <PercentBar percentVal={50} typeOfCard={'long'}/>
      </div>
    )
  }
}

export default App
