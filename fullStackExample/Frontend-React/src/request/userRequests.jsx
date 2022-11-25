import { User } from "../data/dataHelper";


export function registerUserRequest (newUserData){

    const URL = 'http://localhost:3450/api/user'
    
    fetch(URL, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUserData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);

  })    
  .catch((error) => {
    console.error('Error:', error);
  });
}

export function loginUserRequest (userData){

    const URL = 'http://localhost:3450/api/login'
    
    fetch(URL, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);

  })    
  .catch((error) => {
    console.error('Error:', error);
  });
}

