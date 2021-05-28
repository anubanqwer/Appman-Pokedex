import React, { useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Styles from './Modal.module.css';
import search from './search.png';
import PokedexCard from './ReuseComponent/PokedexCard';
import {isPokemonType, getPokemonListAPI} from './Function/getPokemonListAPI';
import {extractNumber, filter, filterDAMAGE, toINT, calculatePokemon} from './Function/calculatePokemon';

const Modal = ({ open, onClose }) => { 

    const [queryList, setQueryList] = useState([]);
    const [inputFromSearchBar, setInputFromSeachbar] = useState('');

    const handleInputFromSearchBar = (e) => {
        setInputFromSeachbar(e.target.value);
    }

    const handleQueryList = (data) => {
        setQueryList(data);
    }

    useEffect(() => {
        // console.log('useEffect in Modal')

        //---------------------------------------------- API -----------------------------------------------------------
        getPokemonListAPI(inputFromSearchBar, handleQueryList);
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
                        {queryList.map((o, i) => {

                            let calculatedO = calculatePokemon(o)
                            // console.log(calculatedO)
                            // console.log(typeof(o))

                            return (
                               <PokedexCard typeOfCard='long'
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
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default Modal;