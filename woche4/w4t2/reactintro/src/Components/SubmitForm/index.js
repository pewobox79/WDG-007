import React, { useState } from 'react';
import InputField from './InputField';

export default function SubmitForm({inputValue, setInputValue}) {

    


    function handleSubmit(e) {
        e.preventDefault();
        setInputValue({firstname: "", password:"", address: false})
        alert(inputValue.address + inputValue.firstname + inputValue.password)
    }


    return (
        <>
            <form>
                <InputField type="text"  name="firstname" placeholder="firstname" inputValue={inputValue} setInputValue={setInputValue} />
                <InputField type="text"  name="password" placeholder="password" inputValue={inputValue} setInputValue={setInputValue} />
                <InputField type="checkbox" name="address" placeholder="address" inputValue={inputValue} setInputValue={setInputValue} />
            
                <button type="submit" onClick={handleSubmit}>submit</button>
            </form>

        </>
    )
}