import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './home.css'
import Accueil from './component/Accueil'

function App() {

  return (
    <>
    <Routes>
         <Route path="/" element={<Accueil />} />
    </Routes>
    </>
  );
}

export default App;