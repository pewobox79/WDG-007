console.log("aus der main js")


//neues Array
let myArray = new Array
console.log(myArray);

//Array befüllen

//Variante 1
myArray[0] = "freitag";
myArray[1] = "samstag";

//variante 2
myArray.push("sonntag");

//variante3
myArray = ["montag", "dienstag"];
console.log(myArray);


//object
let myObject ={
    name: "Michael", alter: 28
}
console.log(myObject);
console.table(myObject);

console.log(myObject.alter);


//loop
for(let key in myObject){
    if(key == "name"){
        console.log(myObject[key]);
    }
}

//aus string ein array machen
const myString = "Hier ist der Peter";
let myStringAsArray = myString.split(" ");
console.log(myStringAsArray)

//variante 1 zum auslesen 
for(let key in myStringAsArray){
    console.log(myStringAsArray[key]);
}

//variante 2 zum auslesen
myStringAsArray.forEach(element => console.log(element));



//event listener 
const myButton = document.getElementById("button");

function handleEvent(){
    console.log("button is clicked");
}

myButton.addEventListener("click", handleEvent);