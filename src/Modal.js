import React, { useEffect, useRef, useState } from 'react';
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

    //------------------------------------------------- OPEN&CLOSE MODAL -------------------------------------------------
    let modalRef = useRef();

    useEffect(() => {

        if(open){
            let handler = (event) => {
                if(!modalRef.current.contains(event.target)) {
                    onClose();
                }
            }
            document.addEventListener("mousedown", handler);

            //---------------------------------------------- API -----------------------------------------------------------
            const resultFromAPI = inputFromSearchBar === '' ? getPokemonListAPI(''): getPokemonListAPI(inputFromSearchBar);
            // const resultFromAPI = getPokemonListAPI('');
            setQueryList(resultFromAPI);
            // console.log(resultFromAPI); -> need promise
            //---------------------------------------------- API -----------------------------------------------------------

            return () => {
                document.removeEventListener("mousedown", handler);
            }
        }

    }, [inputFromSearchBar]);
    //------------------------------------------------- OPEN&CLOSE MODAL -------------------------------------------------

    if(!open) return null;

    return (
        <div className={Styles.overlay}>
            <div ref={modalRef} className={Styles.styleModal}>
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
        </div>
    );
}

export default Modal;