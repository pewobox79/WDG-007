import React, {useState} from 'react';

export default function StringState(){

const [newTopping, setNewTopping] = useState("");



function handleChange(event){
    setNewTopping(event.target.value)
}



    return(
        <div>
            <h1>Pizza Toppings</h1>

            <input type="text" name="topping" placeholder="Add new topping" onChange={handleChange}/>
        </div>
    )
}