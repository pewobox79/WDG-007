const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const inputField = document.getElementById("inputField")

function handleSubmit(e){
    e.preventDefault();
    console.log(input.value);
    
}



let array = []
console.log(array)
function handleChange(e){
 let value = e.target.value;
 array.push(value)
 console.log(array)
}





form.addEventListener("submit", handleSubmit);

inputField.addEventListener("change", handleChange)
//button.addEventListener("click", handleClick)
