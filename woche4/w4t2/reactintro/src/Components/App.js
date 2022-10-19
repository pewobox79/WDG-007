import Header from './Header/Header';
import SubmitForm from './SubmitForm';
import React, {useState} from 'react'
import NavList from './Header/Navigation/NavList';

function App() {

  const [inputValue, setInputValue] = useState({
    firstname: "",
    password: "",
    address: false
})


  return (
    <div className="App">
     <Header/>
     <SubmitForm inputValue={inputValue} setInputValue={setInputValue}/>  
    </div>
  );
}

export default App;
