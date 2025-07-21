import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Categorie from './components/Categorie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>

 <Navbar />
    <Categorie />
 <Footer />   
    </>
  
  );
}

export default App;