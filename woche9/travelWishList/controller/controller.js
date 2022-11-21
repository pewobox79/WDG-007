import { filterCountry } from '../helper/helper.js';
import {validationResult} from 'express-validator';



const countries = [
    { id: 1, name: "Germany", alpha2Code: "DE", alpha3Code: "DEU", visited: true },
    { id: 2, name: "Cuba", alpha2Code: "CU", alpha3Code: "CUB", visited: false },
    { id: 3, name: "Mexico", alpha2Code: "MX", alpha3Code: "MEX", visited: false },
    { id: 4, name: "Maledives", alpha2Code: "MV", alpha3Code: "MDV", visited: false }
]

export const getCountries = (req, res) => {

    /* let countryList ="";
    countries.forEach(country =>{
        countryList = countryList + `<h1>${country.name}</h1>`
    })
    
    res.status(200).send(countryList) */
    res.status(200).json(countries)
}

export const createCountry = (req, res) => {
    //const {id, name, alpha2Code, alpha3Code, visited} = req.body;
    
    //validation body alpha2Code und alpha3Code
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { body: { id, name, alpha2Code, alpha3Code, visited } } = req;

    //check ob country schon existiert...
    const country = filterCountry(alpha2Code, countries);


    if (country) return res.status(403).json({ msg: `country already exists` })

    const newCountry = { id: countries.length + 1, name, alpha2Code, alpha3Code, visited }

    countries.push(newCountry)

    res.status(200).json(countries)
}

export const getSingleCountry = (req, res) => {
    const { code } = req.params
    console.log(code)
    //check, ob das gesuchte land in der liste vohanden ist
    const country = filterCountry(code, countries);

    //fehlermeldung, wenn gesuchtes land -NICHT vorhanden ist
    if (!country) return res.status(404).json({ msg: `country mit alphaCode ${code} ist nicht vorhanden` })

    res.status(200).json(country)
}

export const updateCountry = (req, res) => {

    const { code } = req.params;
    const { name, alpha2Code, alpha3Code, visited } = req.body

    //finden der relevanten Country
    let country = filterCountry(code, countries);
    console.log("alter wert", country);

    if(!country) return res.status(404).json({msg: `country ${code} ist nicht vorhanden`})
    //betroffene Country aktualisieren mit dem spread operator (shallow copy)
    country = { ...country, name, alpha2Code, alpha3Code, visited };

    //ausgabe aktualisierte Country
    console.log("neuer wert", country);
    res.status(200).json(country)
}

export const deleteCountry = (req, res) => {

    const {code} = req.params

    //checkt ob überhaupt die country vorhanden ist...
    const country = filterCountry(code, countries);
    if(!country) return res.status(404).json({msg: `country ${code} existiert nicht`})

    //wenn vorhanden, dann nach dem index suchen und aus dem array löschen

    //const index = countries.findIndex(findCountry => findCountry === country)
    const index = countries.indexOf(country);
    console.log(index);

    countries.splice(index,1);
    
    res.status(200).json(countries)
}