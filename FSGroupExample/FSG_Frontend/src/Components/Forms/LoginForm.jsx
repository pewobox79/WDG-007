import React, {useContext, useState} from 'react'
import { loginRequest } from '../../controller/requestController';
import { LoggedStatusContext } from '../../main';




export default function LoginForm(){
        const userSchema ={
        username: "",
        password: ""
    }

//platz für die user daten 
    const [user, setUser] = useState(userSchema);


//kümmert sich um die eingaben in <input/> feldern
    function handleChange(event){
        //aktualisiere den alten user input mit den neuen daten aus dem formular
        setUser(prev=> ({...prev, [event.target.name]: event.target.value}))
        
    }

//daten weg schicken
    function onSubmit (e){
        e.preventDefault();
        loginRequest(user)//handles POST request to server
        console.log(user)
        
    }
    
    //check userstatus und behandle den return entsprechend

const userStatus = useContext(LoggedStatusContext);



    return(

        <div>
            {userStatus ? <h1> Logout</h1> :
            <div>
          <h1>Login User</h1>
        <form>
            <input type="text" name="username" placeholder="username" required onChange={handleChange}/><br/>
            <input type="password" name="password" placeholder="password" required onChange={handleChange}/><br/>
            <button onClick={onSubmit} >Login</button>
        </form>
        </div>
}
        </div>
    )
}