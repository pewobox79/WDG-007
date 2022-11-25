import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "../Components/Homepage";
import LoginForm from "../Components/Forms/LoginForm";
import Registration from "../Components/Forms/Registration";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
    <Route path="/" element={<Homepage />}/>
      <Route path="login" element={<LoginForm/>} />
      <Route path="register" element={<Registration />} />
      <Route path="blogs" element={<h1>Blog</h1>} />
    </Route>
  ));

