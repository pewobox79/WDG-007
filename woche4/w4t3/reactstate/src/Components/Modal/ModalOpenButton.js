import React from 'react';

export default function ModalOpenButton({isOpen, setIsOpen}){
    return <button onClick={()=>setIsOpen(true)}>Open Modal</button>
}