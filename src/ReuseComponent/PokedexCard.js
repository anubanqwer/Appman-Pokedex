import React from 'react';
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
    const cardWidth = props.typeOfCard == 'long' ? 920: 485;

    let happinessList = [];
    for(var i=0; i < props.numberOfHappiness; i++){
        happinessList.push(<img src={cute} alt='cute' className={Styles.styleCuteImage} />)
    }

    return (
        <div style={{
            height: `${cardHeight}` + 'px',
            width: `${cardWidth}` + 'px',
            'background-color': '#f3f4f7',
            'display': 'flex'
        }}>
            <div className={Styles.pictureArea}>
                <div className={Styles.picture}>
                    <img src={imageUrl} alt="Pokemon Picture" className={Styles.resizePokemonImage} />
                </div>
            </div>
            <div style={{
                // 'backgroundColor': 'yellow',
                'flex-grow': '1'
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
            </div>
        </div>
    );
}

export default PokedexCard;