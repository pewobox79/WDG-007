import React from 'react';

export default function InputField({person, setPerson, type, placeholder, name}) {

    console.log(person)

    function handleChange(event) {
        setPerson({...person,[event.target.name]:event.target.value});
    }

    console.log(person)
    return (
        <input type={type} onChange={handleChange} placeholder={placeholder} name={name} />
    )
}