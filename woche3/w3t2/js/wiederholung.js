const APP = document.getElementById("App");

const divContainer = document.createElement("div");
divContainer.style.height ="200px";
divContainer.style.width = "100%";
divContainer.style.backgroundColor ="red";

APP.appendChild(divContainer);


//container bauen => PARENT DER UL
const listenContainer = document.createElement("div");
listenContainer.setAttribute("id", "listenContainer")
listenContainer.style.height ="200px";
listenContainer.style.width = "100%";
listenContainer.style.backgroundColor ="green";

//UL im container verbinden!
const ul = document.createElement("ul");
ul.setAttribute("id", "listItems");
listenContainer.appendChild(ul)

//neuen Container an die App bauen
APP.appendChild(listenContainer);


//dynamischen inhalt in die UL packen!


//semistatische lösung - hier muss ich jedes listenelement manuell ausgeben
/* const li = document.createElement("li");
li.innerText = meineListe[0];
ul.appendChild(li) */

//dynamische lösung - loopen über array mit createElement feature....
["mercedes", "volvo", "audi", "bmw", "toyota", "ford", "opel"].forEach((listItem, index)=>{
    
    const liItem = document.createElement("li");
    liItem.innerText = listItem;
    ul.appendChild(liItem);


})


