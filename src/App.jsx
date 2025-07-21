import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Categorie from './components/Categorie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

function App() {

  return (
    <CartProvider>
    
  
 <Navbar />
    <Categorie />
 <Footer />  
    </CartProvider>
  
  );
}

export default App;