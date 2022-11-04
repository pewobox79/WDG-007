import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Components/w6t2/Home';
import Books from './Components/w6t2/Books';
import BookDetailPage from './Components/w6t2/BookDetailPage';
import './Components/w6t2/LinkStyle.css'
import ExerciseFull from './Components/w6t2RouterExercise/ExperciseFull';
import ContentfulMain from './Components/w6t5/Contentful/ContentfullMain';


function App() {

  return(
    <ContentfulMain/>
  )
{/** 
  return (
    <div>
      <h1>Routing with React Router</h1>
      <nav>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/books" >BookShelve</NavLink>
      </nav>
      <div id="routingComponents">
        routes initialisert das routing und trägt die entsprechenden route tags 
        <Routes>
          nested routing nutzt man, wenn unter einem pfad mehrere unterpfade existieren 
          <Route path="/" element={<Home />} />
          {/* <Route path="/books">
            <Route index element={<Books />} />
            <Route path=":bookID" element={<BookDetailPage />} />
            <Route path="mybooks" element={<h1>mybooks</h1>} />
          </Route> 


          equivalent zu dem nested routing von der funktion her
          <Route path="books" element={<Books />} />
          <Route path="books/:bookID" element={<BookDetailPage />} />
          <Route path="books/mybooks" element={<h1>mybooks</h1>}/> 
       

          element kann sowohl eine componente als auch tags halten _ pfad * ist für alle pfade, die nicht zu einem route path passen der fallback
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>

      </div>

    </div>
  );
  */}
}

export default App;
