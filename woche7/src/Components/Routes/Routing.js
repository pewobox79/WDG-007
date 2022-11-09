import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Artikel from '../Artikel'
import Homepage from '../ContextComponent/Homepage';
import Counter from '../reducer/Counter'

function Routing() {

   

   
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/articlelist" element={<Artikel/>} />
            <Route path="/article/:title/:id" element={<Counter/>}/>
        </Routes>
    )
}

export default Routing