//Dom auslesen
const input = document.getElementById("catname");
const catListAnchor = document.getElementById("catlist");
const clearButton = document.getElementById("clearButton")

class Cat{
    constructor(name, hungry, happiness, tiredness){
        this.name = name,
        this.hungry = hungry,
        this.happiness = happiness,
        this.tiredness = tiredness
    }

    feed(){
        if(this.hungry > 0){
            this.hungry = this.hungry - 1;
        }else{
            alert("hau ab ich bin satt")
        }
        
    }

    eat(){
        if(this.hungry === 5){
            alert("wo bleibt mein futter?!?!?!?!")
        }else{
        this.hungry += 1;
    }
    }
    sleep(){
        console.log("katze schläft");
    }

    pet(){
        console.log("katze kuschelt");
    }

}

//initial wird der local storage gecheckt, ob cats gefüllt oder vorhanden ist!
let myCats= JSON.parse(localStorage.getItem("cats")) ? JSON.parse(localStorage.getItem("cats")) : [];
console.log(myCats)

//check if storage is empty!
if(myCats.length === 0){
    const info = document.createElement("h3");
    info.innerText = "Keine Katze in der Liste"
    catListAnchor.appendChild(info)
}else{
    generateCatList(myCats);
}


function addNewCat(e){

    let catname = e.target.value;
    const newCat = new Cat(catname, "0", 5, 0);
    myCats.push(newCat);
    
    //katzenliste in localstorage speichern, da hier der aktuellste myCats status ist
    
    //1. umwandeln des myCats Array in JSON string
    const jsonCatList = JSON.stringify(myCats);
    //2. neue JSON Catlist nach Localstorage push
    localStorage.setItem("cats", jsonCatList)
    
    console.log(myCats);
    generateCatList(myCats)
    input.value="";
    
}

function generateCatList(catlist){
    catListAnchor.innerHTML ="";
    catlist.forEach((catItem)=>{
        const div = document.createElement("div");
        const name = document.createElement("h4");
        const happy = document.createElement("p");
        const hungry = document.createElement("p");
        const tired = document.createElement("p");

        //füge die element zusammen
        div.appendChild(name);
        div.appendChild(happy);
        div.appendChild(hungry);
        div.appendChild(tired);
        catListAnchor.appendChild(div);

        //output innertext
        name.innerText = "Name: "+catItem.name;
        happy.innerText= "HappyStatus: "+catItem.happiness;
        hungry.innerText = "HungryStatus: "+ catItem.hungry;
        tired.innerText = "TiredStatus: "+catItem.tiredness;


    })
}




function handleClear(){
    localStorage.removeItem("cats")
    location.reload()
}





//event listener
input.addEventListener("change", addNewCat);
clearButton.addEventListener("click", handleClear)
