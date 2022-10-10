//ausgangslage
const collection={
    cars: ["audi", "mercedes", "manta", "bmw"],
    fuel: ["full", "empty", "half-full", "overloaded", "dry"],
    color: ["red", "blue", "purple", "yellow", "green", "black"]
}


//random generator
function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
}

//Werte aus der Collection auslesen

let personalContent = new Array;

for(let key in collection){
   
    let actualIndex = generateRandomNumber(collection[key].length);

    
switch(key){
    case 'cars':
        personalContent.push(`Dein Lieblingsauto ist ${collection[key][actualIndex].toUpperCase()}`);
        break;
    case 'fuel':
        personalContent.push(`Dein Benzinstand ist ${collection[key][actualIndex].toUpperCase()}`);
        break;
    case 'color': 
        personalContent.push(`Das Auto hat die Farbe ${collection[key][actualIndex].toUpperCase()}`);
        break;
    default: 
        console.log("da ist nix");
}

}

console.log(personalContent);