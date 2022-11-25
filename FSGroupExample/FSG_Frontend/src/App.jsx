import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginForm from './Components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginForm/>
    </div>
  )
}

export default App
