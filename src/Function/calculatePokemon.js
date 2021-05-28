const extractNumber = (res) => {
    //BECAUSE REPLACE is a method of STRING
    //GET number/string RETRUN string
    var newRes = res;
    if(typeof(res) != 'string'){
        // console.log(res, typeof(res))
        newRes =  res.toString();
    }

    let ans = newRes.replace(/\D/g, "")    
    // console.log(typeof(ans), ans)
    return ans
}

const filter = (res) => {

    if(extractNumber(res) === ''){
        //EXAMPLE res = 'NONE' or ''
        return '0';
    }
    else if(res > 100){
        return '100';
    }
    else if(res < 0){
        return '0';
    }
    else{
        return res;
    }
    //RESULT is string too.
}

const filterDAMAGE = (o) => {
    //o is attacks list
    let total = 0;
    for(let i=0; i < o.length; i++){
        let extractedDamage = extractNumber(o[i].damage);
        if( extractedDamage === '' ){
            continue;
        }
        total += parseInt(extractedDamage, 10);
    }
    return total;
    //total is number
}

const toINT = (res) => {
    if(typeof(res) == 'number'){
        return res
    }
    return parseInt(res, 10);
}

const calculatePokemon = (obj) => {
    let calculatedHP = filter(obj.hp);

    let str = obj.attacks.length * '50';
    console.log(str, typeof(str))
    let calculatedSTR = filter(str);

    let weak = obj.weaknesses.length * '100';
    let calculatedWEAK = filter(weak);

    let calculatedDAMAGE = filterDAMAGE(obj.attacks);
    console.log('calculatedDAMAGE', calculatedDAMAGE)

    let calculatedHAPPINESS = ((calculatedHP / 10) + (calculatedDAMAGE /10 ) + 10 - (calculatedWEAK)) / 5;

    return {
        "id": obj.id,
        "imageUrl": obj.imageUrl,
        "name": obj.name,
        "hp": toINT(calculatedHP),
        "str": toINT(calculatedSTR),
        "weak": toINT(calculatedWEAK),
        // "happiness": toINT(calculatedHAPPINESS),
        "happiness": Math.floor(toINT(calculatedHP) / 25) + 1
    }
}

export {extractNumber, filter, filterDAMAGE, toINT, calculatePokemon};

//-------------------------------------------------- TEST ----------------------------------------------------
// let obj1 = {
//     "id": "xy0-14",
//     "name": "Greninja",
//     "nationalPokedexNumber": 658,
//     "imageUrl": "https://images.pokemontcg.io/xy0/14.png",
//     "imageUrlHiRes": "https://images.pokemontcg.io/xy0/14_hires.png",
//     "supertype": "Pokémon",
//     "subtype": "Stage 2",
//     "evolvesFrom": "Frogadier",
//     "hp": "140",
//     "retreatCost": [
//         "Colorless"
//     ],
//     "convertedRetreatCost": 1,
//     "number": "14",
//     "artist": "5ban Graphics",
//     "rarity": "",
//     "series": "XY",
//     "set": "Kalos Starter Set",
//     "setCode": "xy0",
//     "attacks": [
//         {
//             "cost": [
//                 "Water"
//             ],
//             "name": "Mat Block",
//             "text": "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
//             "damage": "40",
//             "convertedEnergyCost": 1
//         },
//         {
//             "cost": [
//                 "Water",
//                 "Water",
//                 "Colorless"
//             ],
//             "name": "Aqua Edge",
//             "text": "",
//             "damage": "80",
//             "convertedEnergyCost": 3
//         }
//     ],
//     "weaknesses": [
//         {
//             "type": "Grass",
//             "value": "×2"
//         }
//     ],
//     "type": "Water"

// }

// console.log(extractNumber('nonE') === '')
// console.log(calculatePokemon(obj1))
//console.log(extractNumber('-1'))