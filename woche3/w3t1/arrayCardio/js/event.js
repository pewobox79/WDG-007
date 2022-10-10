//function wiederholung
const button = document.getElementById("button");

function handleClick(){
    alert("hallo da bin ich");
}

button.addEventListener("click", handleClick);



//events mit input

const firstname = document.getElementById("firstname");
const alter = document.getElementById("alter");
const versenden = document.getElementById("versenden");

let meineDaten = {
    vorname: "", 
    alter:""};


function handleChange(event){
    meineDaten = {
        ...meineDaten,
        [event.target.name]: event.target.value
    }

    console.log(meineDaten);

}

function handleUpdate(){
    alert(`Hallo ${meineDaten.vorname} du bist ${meineDaten.alter}`)
}


firstname.addEventListener("change", handleChange);
alter.addEventListener("change", handleChange);
versenden.addEventListener("click", handleUpdate);