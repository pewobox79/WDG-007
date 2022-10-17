//object mit 4 parametern name, alter, gewicht, groeße
class Person {
    constructor(name, alter, gewicht, groesse) {
        this.name = name,
            this.alter = alter,
            this.gewicht = gewicht,
            this.groesse = groesse

    }

    hallo() {
        console.log(`Hallo ${this.name}. Du bist ${this.alter} `);
    }

}

const person1 = new Person("Sebastian", 23, 70, 183);
//person1.hallo()

const person2 = new Person("Klaus", 55, 110, 70);
//person2.hallo()

const person3 = new Person("max", 55, 90, 210);
//person3.hallo()

//liste als array mit allen personen.....
const personenListe = [person1, person2, person3];
//alternative zu oben ...
personenListe.push(person1);
personenListe.push(person2);
personenListe.push(person3);




//inputfeld auslesen und speichern in variable
const inputFeld = document.getElementById("input");
const listenAnker = document.getElementById("personenListe")

let searchWeight = 0 //halten der Sucheinfo
let filteredPersonenListe = personenListe;


//create funktion für liste
function createList(liste) {
    liste.forEach(item => {
        //create card container
        const div = document.createElement("div");
        div.style.width = "200px";
        div.style.textAlign = "center";
        div.style.padding = "15px 0";
        div.style.margin = "10px";
        div.style.height = "auto";
        div.style.backgroundColor = "yellow";

        //create elements
        const h3 = document.createElement("h3");
        const pAlter = document.createElement("p");
        const pGewicht = document.createElement("p");
        const pGroesse = document.createElement("p");

        //content füllen
        h3.innerText = "Name: " + item.name;
        pAlter.innerText = `Alter: ${item.alter}`;
        pGewicht.innerText = `Gewicht: ${item.gewicht}`;
        pGroesse.innerText = `Größe: ${item.groesse}`;

        //element verbinden
        div.appendChild(h3);
        div.appendChild(pAlter);
        div.appendChild(pGewicht);
        div.appendChild(pGroesse);

        listenAnker.appendChild(div);
    })

}

//initale liste
createList(filteredPersonenListe)

//ab hier beginnt filterarbeit....
function handleInput(event) {

    //daten kommen aus input als STRING rein...müssen umgewandelt werden
    const res = event.target.value;
    //umwandeln von String nach Nummer
    const resInt = parseInt(res);

    searchWeight = resInt; //nummer wird gesetzt

    //personen die mehr als 90Kg haben ausgeben
    filteredPersonenListe = personenListe.filter((person) => {
        if (person.gewicht >= searchWeight) {
            return person
        }
    });


    listenAnker.innerHTML = "";
    createList(filteredPersonenListe)



}


inputFeld.addEventListener("change", handleInput)







