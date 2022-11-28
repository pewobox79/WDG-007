export const checkUserLoggedStatus=()=>{


    const userStorage = localStorage.getItem("name") //ich erhalte JSON von dem local storage
    if(userStorage){
        const status = JSON.parse(userStorage); //umwandeln der JSON in JAVASCRIPT OBJECT
        return status.logged
    }
    
}