import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './Components/Homepage'
import { RouterProvider } from 'react-router-dom'
import {router} from './Router/routing'
import Layout from './Components/Layout'

function App() {

  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default App
