/**
 * JS methoden die auf objecten, arrays angebracht werden können
 * 
 *.include() / .trim() / .split() / .splice() / .filter() / .sort()
 date();
 neuer loop
 for und for/in


 functions
 basic function und event listender

 */

 //String in ein Array umwandeln
 const langerString = "Der Peter ist 43 Jahre alt";
 const langerStringKommas = "Der, Peter, ist, 43, Jahre, alt";
 console.log(langerString);
 console.log(langerStringKommas)

const langerStringAlsArray = langerString.split(" ") ;
console.log(langerStringAlsArray);

const langerStringKommasAlsArray = langerStringKommas.split(",");
console.log(langerStringKommasAlsArray);

//loop über array und check kondition

langerStringAlsArray.forEach((item)=>{
    if(item === "Peter"){
        console.log(`der name ist ${item}`);
    }else{
        console.log("item nicht bekannt!");
    }
    
})

//.trim Methode um leere Charakter am Anfang und am Ende des Strings zu löschen
langerStringKommasAlsArray.forEach((item)=>{
    //umwandelung von " Peter" zu "Peter";
    let myItem =item.trim();
    
    //mit neuem myItem weiterarbeiten
    if(myItem === "Peter"){
        console.log(`der name ist ${myItem}`);
    }else{
        console.log("item nicht bekannt!");
    }
    
});


//FILTER methode

const filterArray = ["WBS", "Class", "Javascript", "Kurs"];

//ausführliche Schreibweise
const results = filterArray.filter((eintrag) => {
     return eintrag.length > 3
})


//kurzschreibweise
const resultKurz = filterArray.filter(eintrag => eintrag.length > 3);

console.log("mein neues Array",results)
console.log(resultKurz);


//Slice Methode

console.log(filterArray.slice(2,3));
console.log(filterArray.slice(2, -1));


//sort

console.log(filterArray.sort());

const zahlenArray = [34, 500, 340, 2];
console.log(zahlenArray.sort());


//include methode
//include methode gibt einen boolean zurück
console.log(zahlenArray.includes(340));


//Date in Javascript

const date = new Date();
console.log(date);

const tag = date.getDay();
console.log(tag);

const datumTag = date.getDate();

console.log(datumTag);


//setTimeout()
/* setTimeout(()=>{
    console.log("hallo aus dem Timeout");
}, 3000 );


 */
//setIntervall()
/* let counter = 0;

setInterval(() => {
    if (counter < 3) {
    counter++;
    console.log("Hallo aus dem Intervall!");
  } else {
    clearInterval();
  }
}, 1000); */


//max und min

const meineWerte = {wert1: 45, wert2: 450, wert3: 12};
console.log(meineWerte);

const meineWerteArray = Object.values(meineWerte);
console.log(meineWerteArray);

//spread operator
const maxWert = Math.max(...meineWerteArray);
const minWert = Math.min(...meineWerteArray);


console.log("max", maxWert);
console.log("min", minWert);



/**
 * FOR LOOP
 * beide varianten
 */


//Variante 1 FOR LOOP

let volume = 0;

for(let i = 0; i < 2; i++ ){

    volume = volume + 1;
    //action
    console.log(`mein aktueller volumen ist ${volume}`);

};


//For IN
//Angewendet bei Objekten
//für REACT oder NEXT JS sehr Interessant und hat viele Verwendungen

const forObject = {
    name: "Peter",
    age: "43", 
    language: "deutsch",
    weight: 85
}

for(let key in forObject){

    if(key === "age"){
        console.log(forObject[key])
    }

}


//map itertion


const myArray = ["peter", "klaus", "simon"];

myArray.map((item)=>{
    console.log(item);
})

myArray.forEach((item)=>{
    console.log(item)
});