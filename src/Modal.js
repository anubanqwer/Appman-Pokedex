import React, { useEffect, useRef } from 'react';
import Styles from './Modal.module.css';
import search from './search.png';
import PokedexCard from './ReuseComponent/PokedexCard';

const Modal = ({ open, onClose }) => { 

    let modalRef = useRef();

    useEffect(() => {

        if(open){
            let handler = (event) => {
                if(!modalRef.current.contains(event.target)) {
                    onClose();
                }
            }

            document.addEventListener("mousedown", handler);
            

            return () => {
                document.removeEventListener("mousedown", handler);
            }
        }

    });

    if(!open) return null;

    return (
        <div className={Styles.overlay}>
            <div ref={modalRef} className={Styles.styleModal}>
                <input type='text' placeholder='Find pokemon' className={Styles.searchBar}/>
                <img src={search} alt='search' className={Styles.styleSearchImage} />
                <div className={Styles.cardAreaInModal}>
                    CardAreaInModal
                    <PokedexCard typeOfCard='short'
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