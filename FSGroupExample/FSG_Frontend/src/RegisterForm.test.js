import RegisterForm from "./Components/Forms/RegisterForm"
import {screen, render, userEvent} from '@testing-library/react'


test("check placeholder", ()=>{

    render(<RegisterForm/>)
    user.type(screen.getByPlaceholderText('firstname'))

    screen.debug()
})

