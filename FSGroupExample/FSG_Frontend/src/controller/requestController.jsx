

export async function loginRequest(userData){


    const URL = 'http://localhost:4430/api/user/login'

    const response = await fetch(URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)

    })

    const json = await response.json()

    console.log("message server",json)
    if(json.msg === 'user logged in'){

        const storage = userData;
        storage.logged = true; //nicht sicherer weg...

        localStorage.setItem("name", JSON.stringify(storage))
    }

}


export async function registerRequest(newUser){

    const URL = 'http://localhost:4430/api/user';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }

    const response = await fetch(URL, options)
    const json = await response.json()
    console.log("server msg: ", json)

    if(json.msg === "registred"){
        localStorage.setItem("user", JSON.stringify(newUser))
    }



}