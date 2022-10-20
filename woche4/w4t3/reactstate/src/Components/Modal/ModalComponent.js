import React from 'react';

export default function ModalComponent({isOpen, setIsOpen, blogArticle}){

console.log("status",isOpen)

const modalVisible ={
    display: "block",
    position: "relative",
    height: "100vh", 
    widht: "100%",
    background: "red",
    opacity: 0.4
    
}

const modalHidden={
    display: "none"
}
    return(
        <div style={isOpen ? modalVisible : modalHidden}>
            <h1 style={{fontSize: "3rem", color: "black"}}>{blogArticle.title}</h1>
            <p>{blogArticle.body}</p>
            <button style={{position: "absolute", right: "30px", top: "30px"}} onClick={()=>setIsOpen(false)}>X</button>


        </div>
    )
}