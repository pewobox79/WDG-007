import React from 'react';

export default function InputField({ name, type, placeholder, inputValue, setInputValue }) {


    function handleChange(e) {

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })
    

    }



    return (
        <>
        <label for={name}>{name.toUpperCase()}</label>
        <input id={name} onChange={handleChange} type={type} defaultChecked={inputValue[name]}value={inputValue[name]} name={name} placeholder={placeholder} />
        </>
    )
}