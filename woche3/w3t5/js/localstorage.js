console.log(localStorage);

const myArray=[{name: "Peter", age: 43}, {name: "Klaus", age: 50}];


//speichern von einem Wert in LocalStorage
localStorage.setItem("cat", "bruno")



//hole mir den localstorage eintrag
const myLocalData = localStorage.getItem("cat");
console.log(myLocalData);



//beispiel mit ARRAY

//werte im localstorage setzen
const json = JSON.stringify(myArray);
console.log(json); //check output
console.log(myArray) //check original array
localStorage.setItem("users", json)
console.log(localStorage)


//werte erhalten

const users = localStorage.getItem("users");
console.log("von local storage",users);

const myTransormedArray = JSON.parse(users);
console.log("users umgewandelt",myTransormedArray)



