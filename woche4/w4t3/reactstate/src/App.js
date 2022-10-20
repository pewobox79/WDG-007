import './App.css';
import ModalComponent from './Components/Modal/ModalComponent';
import ModalFeature from './Components/Modal/ModalFeature';
import ModalOpenButton from './Components/Modal/ModalOpenButton';

function App() {

  const blogArticle ={
    title: "blog 1",
    body: "blog 1 body"
  }

  return (
    <ModalFeature blogArticle={blogArticle}/>
  );
}

export default App;
