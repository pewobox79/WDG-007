import React, { useState } from 'react';
import InputField from './InputField';

export default function FormComponent() {

    const [person, setPerson] = useState({
        firstname: "",
        lastname: "",
        address: ""
    })

    console.log("personIndexPage", person)

    function handleAlert() {
        alert(`hallo ${person.firstname} ${person.lastname}. Du wohnst in ${person.address}`)
    }
    

return (
        <form>
            <InputField type={"text"} placeholder={"firstname"} name={"firstname"} person={person} setPerson={setPerson} />
            <InputField type={"text"} placeholder={"lastname"} name={"lastname"} person={person} setPerson={setPerson} />
            <InputField type={"text"} placeholder={"address"} name={"address"} person={person} setPerson={setPerson} />
            <button type="submit" onClick={handleAlert}>Submit person data</button>
        </form>
    )
}