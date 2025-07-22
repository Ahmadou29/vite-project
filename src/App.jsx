/** @format */

import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Categorie from './components/Categorie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Categorie />} />
          <Route path="/detail/:category/:subCategory/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
