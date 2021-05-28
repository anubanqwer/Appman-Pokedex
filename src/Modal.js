import React, { useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Styles from './Modal.module.css';
import search from './search.png';
import PokedexCard from './ReuseComponent/PokedexCard';
import {isPokemonType, getPokemonListAPI} from './Function/getPokemonListAPI';

const Modal = ({ open, onClose }) => { 

    const [queryList, setQueryList] = useState([]);
    const [inputFromSearchBar, setInputFromSeachbar] = useState('');

    const handleInputFromSearchBar = (e) => {
        setInputFromSeachbar(e.target.value);
    }

    useEffect(() => {
        // console.log('useEffect in Modal')

        //---------------------------------------------- API -----------------------------------------------------------
        const resultFromAPI = inputFromSearchBar === '' ? getPokemonListAPI(''): getPokemonListAPI(inputFromSearchBar);
        setQueryList(resultFromAPI);
        // console.log(resultFromAPI); -> need promise ?
        //---------------------------------------------- API -----------------------------------------------------------

    }, [inputFromSearchBar]);

    if(!open) return null;

    return (
        <div className={Styles.overlay}>
            <OutsideClickHandler
            onOutsideClick={() => {
                onClose();
            }}
            >
                <div className={Styles.styleModal}>
                    <input type='text' placeholder='Find pokemon' onChange={handleInputFromSearchBar} className={Styles.searchBar}/>
                    <img src={search} alt='search' className={Styles.styleSearchImage} />
                    <div className={Styles.cardAreaInModal}>
                        <PokedexCard typeOfCard='long'
                        imageUrl='https://images.pokemontcg.io/ex14/85.png'
                        pokemonName='Cutto'
                        hpPercent={90}
                        strPercent={20}
                        weakPercent={50}
                        numberOfHappiness={5}/>
                        <PokedexCard typeOfCard='long'
                        imageUrl='https://images.pokemontcg.io/ex14/85.png'
                        pokemonName='Cutto'
                        hpPercent={90}
                        strPercent={20}
                        weakPercent={50}
                        numberOfHappiness={5}/> 
                        <PokedexCard typeOfCard='long'
                        imageUrl='https://images.pokemontcg.io/ex14/85.png'
                        pokemonName='Cutto'
                        hpPercent={90}
                        strPercent={20}
                        weakPercent={50}
                        numberOfHappiness={5}/> 
                        <PokedexCard typeOfCard='long'
                        imageUrl='https://images.pokemontcg.io/ex14/85.png'
                        pokemonName='Cutto'
                        hpPercent={90}
                        strPercent={20}
                        weakPercent={50}
                        numberOfHappiness={5}/> 
                        <PokedexCard typeOfCard='long'
                        imageUrl='https://images.pokemontcg.io/ex14/85.png'
                        pokemonName='Cutto'
                        hpPercent={90}
                        strPercent={20}
                        weakPercent={50}
                        numberOfHappiness={5}/>                     
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default Modal;