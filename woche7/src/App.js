import './App.css';
import MyApp from './Components/w7t5/Components/MyApp';

/* import Artikel, { loader as ArtikelLoader } from './Components/w7t3/Artikel';
import Counter from './Components/w7t3/reducer/Counter';
import { Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Homepage from './Components/w7t3/ContextComponent/Homepage'; */


/* const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Homepage />} />
    <Route path="/articlelist" element={<Artikel />} loader={ArtikelLoader} />
    <Route path="/article/:title/:id" element={<Counter />} />
  </Route>
)) */



function App() {

  return <MyApp />
}

export default App;
