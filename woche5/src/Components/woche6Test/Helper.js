import React from 'react';
import data from '../../init/website.json'
import Recommendation from './Components/Recommendation';

export default function Helper(){
console.log(data.data);

const dataMapping={
    "homepage": <Recommendation/>,
}

const relevantContent = data.data.map((item)=>{
console.log("itemsvalue",item)
    for(let key in dataMapping){
        if(key === item.type){

        console.log(item.type)
            let SelectedComponent = dataMapping[key];
            console.log("selected",SelectedComponent)
            return <SelectedComponent {...item}/>
        }
    }
console.log("relevant content",relevantContent)
})
   return (<>{relevantContent}</>)
}