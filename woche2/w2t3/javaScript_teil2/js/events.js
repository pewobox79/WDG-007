//ziehe das Element aus dem document nach JS
const button = document.getElementById("myButton");

//erstelle die funktion
function handleEvent(){
    alert("Hallo der Event läuft!")
}

//füge die funktion dem element zu
button.addEventListener("click", handleEvent);