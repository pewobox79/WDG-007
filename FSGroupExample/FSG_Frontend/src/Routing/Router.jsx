import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';
import Homepage from '../Components/Homepage';
import ErrorPage from '../Components/AssetComponents/ErrorPage';


export const router = createBrowserRouter(createRoutesFromElements(

    <Route>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registration" element={<RegisterForm/>} />
        <Route path="*" element={<ErrorPage/>}/>
    </Route>



));