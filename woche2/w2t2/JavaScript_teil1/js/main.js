
/**
 * Hier werden wir nur die Standard Declarierungen listen!
 */

//Konstanten

const myString = 'das ist ein String';
const myNumber = 45;
const myNumber2 = "45";
const myBoolean = false;



//Array und Objekte

//const myConstructArray = new Array; als alternative zu myArray...

const myArray = ['Peter', 'Michael', 'Christin'];
/**
 * das Array gibt zweit Infromationen aus
 * KEY : VALUE
 * 0   : "Peter";
 */
//console.log("infos array",myArray.length);

const myObject = {name: "Peter", age: 43, groeße: "180cm"};
//console.log("mein Object ist",myObject);


//loop
//forEach loop über myCars:

const myCars = ["Ford Mustang", "Mercedes GL", "Trabant"];

myCars.forEach((car, index)=>{
    console.log(car + " hat den index " + index) ;
});


//loop übrer Array mit Objekten

const myNewCars = [
    {name: "Ford Mustang", ps: 450, farbe: "red",antrieb: "4rad"},
    {name: "Mercedes GL", ps: "500ps", farbe: "schwarz", antrieb: ""},
    {name: "Trabant", ps: "70ps", farbe: "hellblau", antrieb: ""}
];

//console.error("das ist eine wichtige meldung");
//console.warn("hallo warnung");
console.table(myNewCars);

myNewCars.forEach((newCar)=>{console.log(`Mein ${newCar.name} hat die Farbe ${newCar.farbe}`)});




/**
 * funktionen Beispiele
 */

//deklariere die Funktion und lege inhalt fest!
function talk(){
    console.log("Befehl aus der Funktion Talk()");
}

function talkDynamic (farbe, car){

    console.log(`Hier fährt ein ${farbe}er ${car}`);
    
}

//rufe die Funktion auf
//talk();
//talkDynamic("blau", "audi");


//if statement

myNewCars.forEach(newCar => {

    if(newCar.farbe === "red"){
        console.log(`der ${newCar.name} ist ${newCar.farbe} `)
    }


})


//switch statement
const car = "BMW";

switch(car){
    case "BMW":
        console.log("Das ist ein BMW!");
        break;
    case "Mercedes":
        console.log("Das ist ein Mercedes!");
        break;
    default:
        console.log("das Auto ist nicht in der Garage!");

}

