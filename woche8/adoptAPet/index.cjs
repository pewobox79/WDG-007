const express = require('express');
const app = express();
const PORT = 3030;

const pets = require('./helper.cjs');

//Homepage mit link zur übersichtsseite
app.get("/", (req, res) => {
    const title = `<h1>Adopt a Pet!</h1>`;
    const description = `<p>Browse through the links below to find your new furry friend:</p>`
    const animalsListButton = `<h3><a href="/animals">Zu den Tieren</a></h3>`

    res.status(200).send(title + description + animalsListButton);
})

//allgemeine übersichtsseite der Tierarten die zur auswahl stehen
app.get('/animals', (req, res) => {
    let animalLink = "";
    for (let key in pets) {
        animalLink += `<li><a href="/animals/${key}">${key.toUpperCase()}</a></li>`
    }

    res.send(`<h1>List of Animals</h1><br><ul>${animalLink}</ul>`)
})


//categorie seite mit namen der Tiere
app.get("/animals/:pet_type", (req, res) => {

    const { pet_type } = req.params;
    
    let petList = "";
    pets[pet_type].forEach((pet, index) => {
        petList += `<li><a href="/animals/${pet_type}/${index}">${pet.name}</a></li>`
    })

    res.status(200).send(`<h1>list of ${pet_type}</h1><ul>${petList}</ul>`)
})

//route für detailsseite des Tieres
app.get('/animals/:pet_type/:pet_id', (req, res) => {

    const {pet_type, pet_id} = req.params
   

    const myPet = pets[pet_type][pet_id]
    console.log("selected Pet",myPet)

    
    const petName = `<h1>Name: ${myPet.name}</h1>`;
    const petImg = `<img src="${myPet.url}" width="80px" height="80px"/>`;
    const description = `<p>Description: ${myPet.description}</p>`;
    const petListElement = `<ul><li>Breed: ${myPet.breed}</li><li>Age: ${myPet.age}</li></ul>`


    res.status(200).send(petName + petImg + description + petListElement)

})

app.listen(PORT, () => console.log(`app listen to ${PORT}`))