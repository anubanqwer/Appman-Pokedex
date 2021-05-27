import React, { useState } from 'react';
import Styles from './PokedexCard.module.css';
import PercentBar from './PercentBar';
import cute from '../cute.png';

const PokedexCard = (props) => {

    //variables from props
    const typeOfCard = props.typeOfCard;
    const imageUrl = props.imageUrl;
    const pokemonName = props.pokemonName;
    const hpPercent = props.hpPercent;
    const strPercent = props.strPercent;
    const weakPercent = props.weakPercent;
    const numberOfHappiness = props.numberOfHappiness;    

    //Other variables
    const cardHeight = 287;
    const cardWidth = props.typeOfCard === 'long' ? 920: 485;
    const informationAreaWidth = props.typeOfCard === 'long' ? 700: 265;
    const buttonName = props.typeOfCard === 'long' ? 'Add': 'X';

    let happinessList = [];
    for(var i=0; i < props.numberOfHappiness; i++){
        happinessList.push(<img src={cute} alt='cute' className={Styles.styleCuteImage} />)
    }

    const [isHoverCard, setIsHoverCard] = useState(false);

    return (
        <div style={{
            height: `${cardHeight}` + 'px',
            width: `${cardWidth}` + 'px',
            'background-color': '#f3f4f7',
            'box-shadow': '3px 3px #d5d6dc',
            'display': 'flex',
            'margin': '10px 0px'
        }}
            onMouseEnter={()=> setIsHoverCard(true)}
            onMouseLeave={()=> setIsHoverCard(false)}
        >
            <div className={Styles.pictureArea}>
                <div className={Styles.picture}>
                    <img src={imageUrl} alt="Pokemon Picture" className={Styles.resizePokemonImage} />
                </div>
            </div>
            <div style={{
                // 'backgroundColor': 'yellow',
                // 'flex-grow': '1',
                width: `${informationAreaWidth}` + 'px',
                'position': 'relative'
            }}>
                <h1 className={Styles.stylePokemonName}>{pokemonName}</h1>
                <table style={{
                    // 'backgroundColor': 'red',
                    width: '100%',
                }}>
                    <tr>
                        <td className={Styles.setFontWeightBeforeTube}>HP</td>
                        <td>
                            <PercentBar percentVal={hpPercent} typeOfCard={typeOfCard} />
                        </td>
                    </tr>
                    <tr>
                        <td>STR</td>
                        <td>
                            <PercentBar percentVal={strPercent} typeOfCard={typeOfCard} />
                        </td>
                    </tr>
                    <tr>
                        <td>WEAK</td>
                        <td>
                            <PercentBar percentVal={weakPercent} typeOfCard={typeOfCard} />
                        </td>
                    </tr>
                </table>            
                {happinessList}

                <div style={{
                    /* background-color: chartreuse; */
                    color: '#dc7777',
                    'font-size': '25px',
                    /* width: 50px; */
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    'margin-top': '10px',
                    'margin-right': '10px',
                    display: isHoverCard ? "": "none"
                }}>{buttonName}</div>
            </div>
        </div>
    );
}

export default PokedexCard;