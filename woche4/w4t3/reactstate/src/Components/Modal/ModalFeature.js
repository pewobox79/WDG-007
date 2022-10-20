import React,{useState} from 'react';
import ModalComponent from './ModalComponent';
import ModalOpenButton from './ModalOpenButton';

export default function ModalFeature({blogArticle}){

    const [isOpen, setIsOpen]=useState(false)

    return(
        <>
            <ModalComponent blogArticle={blogArticle} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <ModalOpenButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}