import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {checkUserLoggedStatus} from './controller/localStorageController'

  //TODO userstauts initial hier...
const userStatus = checkUserLoggedStatus();

export const LoggedStatusContext = createContext({userStatus});

console.log("userstatus",userStatus)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <LoggedStatusContext.Provider value={userStatus}>
        <App />
      </LoggedStatusContext.Provider>
    </React.StrictMode>

)
