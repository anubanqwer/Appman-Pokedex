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

    const dummyArray = ['a', 'b', 'c', 'd']
    const dummyArray2 = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}]

    const handleInputFromSearchBar = (e) => {
        setInputFromSeachbar(e.target.value);
    }

    useEffect(() => {
        // console.log('useEffect in Modal')
        console.log(typeof(dummyArray), typeof(dummyArray2), typeof(queryList),
        typeof(dummyArray[0]), typeof(dummyArray2[0]), typeof(queryList[0]))

        //---------------------------------------------- API -----------------------------------------------------------
        let resultFromAPI = inputFromSearchBar === '' ? getPokemonListAPI(''): getPokemonListAPI(inputFromSearchBar);
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
                        
                        {/* {queryList.map((o) => {
                            // let calculatedO = calculatePokemon(o)
                            // console.log(calculatedO)
                            return (<p>hello!</p>);
                            // return <PokedexCard typeOfCard='long'
                            // id = {calculatedO.id}
                            // imageUrl= {calculatedO.imageUrl}
                            // pokemonName= {calculatedO.name}
                            // hpPercent= {calculatedO.hp}
                            // strPercent= {calculatedO.str}
                            // weakPercent= {calculatedO.weak}
                            // numberOfHappiness= {calculatedO.happiness}/> 
                        })}                  */}
                        {dummyArray.map((o) => {
                            return (<p>hello!</p>);
                        })}    
                        {dummyArray2.map((o) => {
                            return (<p>hello2!</p>);
                        })}       
                        {queryList.map((o) => {
                            return (<p>hello3!</p>);
                        })}       
                        {/* <div>hello!</div>
                        <div>hello!</div>
                        <div>hello!</div> */}
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default Modal;