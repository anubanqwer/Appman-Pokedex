import React, { Component } from 'react'
import './App.css'
import PercentBar from './ReuseComponent/PercentBar';
import Header from './Header';
import Footer from './Footer';
import PokedexCard from './ReuseComponent/PokedexCard';

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

  handleModal = () => {
    console.log('Hello World');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="cardArea">
        <PokedexCard typeOfCard='short'
                     imageUrl='https://images.pokemontcg.io/ex14/85.png'
                     pokemonName='Cutto'
                     hpPercent={90}
                     strPercent={20}
                     weakPercent={50}
                     numberOfHappiness={5}/>
                     {/* <PokedexCard typeOfCard='short'
                     imageUrl='https://images.pokemontcg.io/ex14/85.png'
                     pokemonName='Cutto'
                     hpPercent={90}
                     strPercent={20}
                     weakPercent={50}
                     numberOfHappiness={5}/>
                     <PokedexCard typeOfCard='short'
                     imageUrl='https://images.pokemontcg.io/ex14/85.png'
                     pokemonName='Cutto'
                     hpPercent={90}
                     strPercent={20}
                     weakPercent={50}
                     numberOfHappiness={5}/> */}
        </div>

        <Footer />
        <span class="dotAtFooter">
          <p className="buttonAtFooter" onClick={this.handleModal} >+</p>
        </span>        

      </div>
    )
  }
}

export default App
