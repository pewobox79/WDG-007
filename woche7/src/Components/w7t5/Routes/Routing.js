import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from '../Components/Home';
import User, { loader as UserData } from '../Components/User';
import Profile, { loader as SingleUser } from '../Components/Profile';
import Account from '../Components/Account';
import NoMatch from '../Components/NoMatch';
import ErrorMessage from '../Components/ErrorMessage';
import DefferedBlogPosts, { loader as deferedLoader } from '../Components/DefferedBlogPosts';

export default function Routing() {
    //this is the place for the routes

    const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="user" element={<User />} loader={UserData} errorElement={<ErrorMessage />} />
            <Route path="user/profile" element={<Profile />} loader={SingleUser} >
                <Route index path=":id" element={<Profile />} />
                <Route path="account" element={<Account />} />
            </Route>
            <Route path="defer" element={<DefferedBlogPosts/>} loader={deferedLoader} />


            <Route path="*" element={<NoMatch />} />

        </Route>
    ))
console.log("the router",router)
    return <RouterProvider router={router} />
}