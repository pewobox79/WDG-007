/**
 * 
 * im html document braucht man noch
 * <input type="text" id="inputField" name="input" placeholder="Dein Input"/>
        <div id="listOutput"></div>
 */

//alle elemente die ich brauch
const inputField = document.getElementById("inputField");
const listOutput = document.getElementById("listOutput");
const ul = document.createElement("ul");

listOutput.appendChild(ul);

//initaler Wert meiner Liste;
let inputList = []

function handleInput(event){
    const newInput = event.target.value
    inputList.push({newInput})
    inputField.value = "";
    createList(inputList);
    console.log(inputList)
}

inputField.addEventListener("change", handleInput);



function createList(liste){
    ul.innerHTML ="";
    liste.forEach((item, index)=>{
            const li = document.createElement("li");
            li.innerText = item.newInput;
            li.setAttribute("id", `element${index}`)
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "X";
            const editButton = document.createElement("button");
            editButton.innerText ="O";

            li.appendChild(deleteButton);
            li.appendChild(editButton);
            ul.appendChild(li);


            //handle delete
            deleteButton.addEventListener("click", ()=>{
                deleteItem(index);
            } )

            editButton.addEventListener("click", ()=>{
                openEditField(inputList[index], true)
            })
            
        })
        

}



function deleteItem(index){
    inputList.splice(index, 1);
    createList(inputList)

}

function openEditField(input, status){
    inputField.value = input.newInput;
    

}

