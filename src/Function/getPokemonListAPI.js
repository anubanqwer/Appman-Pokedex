import axios from 'axios';

const isPokemonType = (inputString) => {
    const pokemonType = [
        'Psychic',
        'Fighting',
        'Fairy',
        'Normal',
        'Grass',
        'Metal',
        'Water',
        'Lightning',
        'Darkness',
        'Colorless',
        'Fire'
    ]

    const inputStringLowerCase = inputString.toLowerCase();

    for(let i=0; i < pokemonType.length; i++) {
        if(inputStringLowerCase === pokemonType[i].toLowerCase()){
            return true;
        }
    }
    return false;

}

const getPokemonListAPI = (inputFromSeachbar, handleQueryList) => {
    //inputFromSearchBar is string

    const queryBaseString = 'http://localhost:3030/api/cards';
    let queryAddOn = '';

    if(inputFromSeachbar != queryAddOn){
        if (isPokemonType(inputFromSeachbar)){
            //It's a type
            queryAddOn = '?type=' + inputFromSeachbar;
        }
        else{
            //It's name
            queryAddOn = '?name=' + inputFromSeachbar;
        }
    }

    axios.get(queryBaseString + queryAddOn).
    then(res =>{
        // console.log(res.data.cards);
        handleQueryList(res.data.cards)
        // return res.data.cards;
    }).
    catch(err =>{
      console.log(err);
    });
}

export {isPokemonType, getPokemonListAPI};