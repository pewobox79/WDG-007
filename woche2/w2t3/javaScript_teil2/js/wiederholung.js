/**
 * Wiederholung von gestern
 * const / let
 * array / objects
 * Looping
 * Equals unterschiede
 * 
 */


const number = 23;
console.log(number);

const string = "mein String";
console.log(string);

let boolean = true;
console.log(boolean);

const object = {name: "Peter", age: 43};
console.table(object);
console.log("alter",object.age)

const array = ["Peter", "Klaus", "Thomas"];
console.log("nur ein value",array[1]);


//array Loop 
array.forEach(element=>{
    console.log(element);

})



//if - else Kondition erstellen
if(!boolean){
    console.log("ist true");
}else{
    console.log("ist false");
}

const nummer = "23";

const nummer2 = 23;

if(nummer === nummer2){
    console.log(nummer);

}else{
    console.log("nicht gleich")
}

