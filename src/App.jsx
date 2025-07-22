/** @format */
<<<<<<< HEAD
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
=======

import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Categorie from './components/Categorie';
>>>>>>> 0280aa3ff2b75fc08b85df4a7a0b79490eaa5f07
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetail';
<<<<<<< HEAD
// import Blog from './components/Blog';
=======
>>>>>>> 0280aa3ff2b75fc08b85df4a7a0b79490eaa5f07

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />

        <Routes>
<<<<<<< HEAD
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/detail/:blog/:subBlog/:id" element={<ProductDetail />} /> */}
=======
          <Route path="/" element={<Categorie />} />
          <Route path="/detail/:category/:subCategory/:id" element={<ProductDetail />} />
>>>>>>> 0280aa3ff2b75fc08b85df4a7a0b79490eaa5f07
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 0280aa3ff2b75fc08b85df4a7a0b79490eaa5f07
