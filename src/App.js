import React, { useState } from 'react'
import './App.css'
import PercentBar from './ReuseComponent/PercentBar';
import Header from './Header';
import Footer from './Footer';
import PokedexCard from './ReuseComponent/PokedexCard';
import Modal from './Modal'
import {extractNumber, filter, filterDAMAGE, toINT, calculatePokemon} from './Function/calculatePokemon';

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

const App = () => {

  //OPEN MODAL 
  const [isOpen, setIsOpen] = useState(false);
  const [myList,  setMyList] = useState([]);

  const addToMyList = ( newCardInJSONFormat ) => {
    myList.push(newCardInJSONFormat);
  }

  return (
    <div className="App">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} addToMyList={addToMyList}/>

      <Header />
      <div className="cardArea">
        {myList.map((o, i) => {

        let calculatedO = calculatePokemon(o)

        return (
          <PokedexCard typeOfCard='short'
            id = {o.id}
            index = {i}
            imageUrl= {o.imageUrl}
            pokemonName= {o.name}
            hpPercent= {calculatedO.hp}
            strPercent= {40}
            weakPercent= {50}
            numberOfHappiness= {5}/> 
        );
        })}                    
      </div>

      <Footer />
      <span class="dotAtFooter">
        <p className="buttonAtFooter" onClick={() => setIsOpen(true)} >+</p>
      </span>        

    </div>
  );
  
}

export default App
