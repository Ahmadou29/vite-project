/** @format */
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetail';
// import Blog from './components/Blog';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/detail/:blog/:subBlog/:id" element={<ProductDetail />} /> */}
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;