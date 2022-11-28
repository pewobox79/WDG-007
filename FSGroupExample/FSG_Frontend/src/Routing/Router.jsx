import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import LoginForm from '../Components/Forms/LoginForm';
import RegisterForm from '../Components/Forms/RegisterForm';
import Homepage from '../Components/Homepage';
import ErrorPage from '../Components/AssetComponents/ErrorPage';
import Layout from '../Components/Layout';
import UploadImageForm from '../Components/Forms/uploadImageForm';

export const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registration" element={<RegisterForm/>} />
        <Route path="/upload-image" element={<UploadImageForm/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Route>



));