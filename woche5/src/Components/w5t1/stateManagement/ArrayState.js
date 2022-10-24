import React, {useState} from 'react';

//globale Konstante
const initalToppings = ["cheese", "tomato"];

export default function ArrayState(){

const [newTopping, setNewTopping] = useState("");
const [listOfToppings, setListOfToppings] = useState(initalToppings)


function handleChange(event){
    setNewTopping(event.target.value);
}


function addNewTopping(){
    setListOfToppings(prevValue => [...prevValue, newTopping])

}


function removeTopping(event){
    //get identifier => string innerhalb des <div>
    const selectedTopping = event.target.innerText;

    setListOfToppings(prev=>{
        //checken ob das ausgewählte element (text) in der liste existiert
        if(prev.includes(selectedTopping)){
            //gib alle toppings zurück - bis auf das, was ausgesucht wurde
            return prev.filter(topping => topping !== selectedTopping)
        }

    })
    

}


const toppingList = listOfToppings.map((topping, index)=>{
    return <div key={index} onClick={removeTopping}>{topping}</div>
})

    return(
        <div>
            <h1>Pizza Toppings - ArrayState</h1>

            <input 
                type="text" 
                name="topping" 
                placeholder="Add new topping" 
                onChange={handleChange}
            />
            <button onClick={addNewTopping}>Add new Topping</button>

            <div id="listOfToppings">
                {toppingList}
            </div>
        </div>
    )
}