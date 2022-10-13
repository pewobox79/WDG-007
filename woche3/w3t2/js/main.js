const App = document.getElementById("App");
console.log(App)

//my UL Custom
const ul = document.createElement("ul");
const li= document.createElement("li");
li.innerHTML = "<strong>Hallo List Element</strong>";

ul.appendChild(li)
App.appendChild(ul);


//my Div Container Custom
const divEl = document.createElement("div");
divEl.style.width = "100%";
divEl.style.height = "300px";
divEl.style.backgroundColor = "red";
divEl.style.border = "2px solid black";
divEl.style.borderRadius = "10px";


//my div with class
const divElWithClass = document.createElement("div");
divElWithClass.className = "myDivEl";
divElWithClass.classList.add("newBackground", "nochEine");
//divElWithClass.classList.remove("newBackground");


//attribute setzen
divEl.setAttribute("id", "redBox");
divElWithClass.setAttribute("id", "greenBox");
App.appendChild(divEl);
App.appendChild(divElWithClass);


/* hier ist schon alles da in der DOM*/

const divElRed = document.getElementById("redBox")

//toggle effect
let isChanged = false;

function handleChangeColor(){
    isChanged = !isChanged
    
    if(isChanged){
        divElRed.style.backgroundColor = "yellow";
    }else{
        divElRed.style.backgroundColor = "red"
    }
       
}
//divEl.addEventListener("click", handleChangeColor)

divElRed.addEventListener("click", handleChangeColor)
 



//Daten sätze in DOM Bringen

const einkaufsListe = ["Bananen", "neue Hose", "Waschpulver", "Wasser", "Eier", "Nudeln", "Hackbällchen"]

const einkaufsListenAnker = document.createElement("div");
einkaufsListenAnker.setAttribute("id", "Einkaufslisteanker")

einkaufsListe.map((einTeil, index)=>{

    const paragraph = document.createElement("p");
    const aTag = document.createElement("a");
    aTag.setAttribute("href", `https://www.${einTeil}.de`);
    aTag.setAttribute("target", "_blank");
    aTag.setAttribute("title", einTeil)
    aTag.style.color = "green";
    aTag.style.textDecoration = "none"
    paragraph.appendChild(aTag);


    paragraph.setAttribute("id", index)
    paragraph.className = "einkaufsListenElement"
    aTag.innerText = einTeil

    einkaufsListenAnker.appendChild(paragraph)

})

App.appendChild(einkaufsListenAnker);


//querySelector vs byClassNames
//echtes Array....
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs)

allParagraphs.forEach((item)=>{
    console.log(item)
    einkaufsListenAnker.appendChild(item)
})


//unechtes Array...
const allParaMitClass = document.getElementsByClassName("einkaufsListenElement");
console.log(allParaMitClass)

console.log(allParaMitClass[4])

//von unecht in echtes Array umwandeln;
const newArray = Array.from(allParaMitClass)
console.log(newArray);

newArray.forEach((item)=>{
    console.log("aus new Array",item)
})



