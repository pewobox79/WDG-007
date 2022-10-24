import React, {useState, useEffect} from 'react';

export default function Arrays(){

const [topping, setTopping]=useState([]);
const [newTopping, setNewTopping] =useState("");
const [counter, setCounter] = useState(0)


console.log("topping value start",topping)
    function handleChange(event){
        let newTopping = event.target.value
        setNewTopping(newTopping)
        newTopping = ""
       
    }


function addTopping(){
    setTopping(prev=>[...prev, newTopping])
}



function removeItem(event){
    
    let selectedTopping = event.target.innerText;
    setTopping((prev)=>{
        if(prev.includes(selectedTopping)){
            //removed topping
            return prev.filter(t => t !== selectedTopping);
        }

    })

}

useEffect(()=>{
    setCounter(prev => prev + 1)
    console.log("useEffect runs....", counter)
}, [topping])


const myToppings = topping.map((topping, index)=>{

    return <div key={index} onClick={removeItem}>{topping}</div>
})


console.log("topping Value after", topping)
    return(
        <div>

            <input type="text" name="topping" placeholder="add pizza topping" onChange={handleChange}/>
            <button onClick={addTopping}>add topping</button>
{myToppings}

        </div>
    )
}