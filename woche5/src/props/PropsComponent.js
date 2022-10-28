import React from 'react'
import Person from './Person'

export default function PropsComponent(){

    const myArray = [
    {
        name: "peter", 
        title: "Developer", 
        job: "WebDeveloper", 
        location: [
        {
            street: {
                name: "strasse", 
                nummer: "54"
            }, 
            city: "munich",
            type: "home"
        },
        {
            street: "strasse", 
            city: "munich",
            type: "work"
        }
    ]
    },
    {name: "Klaus", title: "Developer", job: "WebDeveloper", location: {}},
    {name: "Martin", title: "Developer", job: "WebDeveloper", location: {street: "strasse", city: "berlin"}}]
   
    const personsList = myArray.map((person, index)=>{
        return <Person key={index} name={person.name} title={person.title} job={person.job} location={person.location}/>
    
    })
   
    return(
        <div style={{border: "1px solid black", margin: "10px"}}>
            <h1>hallo props componente</h1>
        {personsList}
        </div>
    )
}