
// import { Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import Accueil from './components/Accueil';
// import { Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Categorie from './components/Categorie';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import { CartProvider } from './components/CartContext';
// import ProductDetail from './components/ProductDetail';

// function App() {
//   return (
//     <div>
//       <CartProvider>
//         <Navbar />
//     <Routes>
//       <Route path="/" element={<Accueil />} /> {/* ✅ racine = accueil */}
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/register" element={<RegisterPage />} />
//        <Route path="/" element={<Categorie />} />
//           <Route path="/detail/:category/:subCategory/:id" element={<ProductDetail />} />
//           //  <Route path="/product" element={<ProductDetail />} />
//     </Routes>
//      <Footer />
//       </CartProvider>
//     </div>
//   );
// }


// export default App;
   

import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Accueil from './components/Accueil';
import Categorie from './components/Categorie';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetail';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';

import './App.css';

function App() {
  const location = useLocation();

  // chemins où on ne veut pas afficher le navbar/footer
  const hideLayoutRoutes = ['/login', '/register'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);
  return (
     <CartProvider>
     {/*  On affiche Navbar seulement si pas login/register */}
      {!hideLayout && <Navbar />}
    

      <Routes>
        <Route path="/" element={<Accueil />} /> {/* Page d'accueil */}
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/categorie" element={<Categorie />} /> {/* Corrigé */}
        <Route path="/detail/:category/:subCategory/:id" element={<ProductDetail />} />
        {/* <Route path="/product" element={<ProductDetail />} /> */}
      </Routes>

 <ToastContainer position="top-center" autoClose={3000} />
 
      {/*  Footer pareil */}
      {!hideLayout && <Footer />}
    </CartProvider>
  
  );
}

export default App;
