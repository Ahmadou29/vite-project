

import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Accueil from './components/Accueil';
import TabsShop from './components/TabsShop';
import Categorie from './components/Categorie';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetail';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from './components/Detail.jsx'; 
import Detail2 from './components/Detail2.jsx'; 
import ModePayement from './components/modepayement.jsx';
import AdminDashboard from './components/AdminDashboard.jsx'
import Footer from './components/Footer';
import './App.css';
import "./components/TableShop.css";


function App() {
  const location = useLocation();

  // chemins où on ne veut pas afficher le navbar/footer
  const hideLayoutRoutes = ['/login', '/register' , '/admin','/detail2'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);
  return (
     <CartProvider>
     {/*  On affiche Navbar seulement si pas login/register */}
      {!hideLayout && <Navbar />}
    
                                  *
      <Routes>
        <Route path="/" element={<Accueil />} /> {/* Page d'accueil */}
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/categorie" element={<Categorie />} /> 
         <Route path="/tabsShop" element={<TabsShop/>} /> 
        <Route path="/detail/:category/:subCategory/:id" element={<ProductDetail />} />
        <Route path="/" element={<Detail />} />
      <Route path="/detail2" element={<Detail2 />} /> 
      <Route path="/modepayement" element={<ModePayement />} /> 
      <Route path="/admin" element={<AdminDashboard />} />
      
        {/* <Route path="/product" element={<ProductDetail />} /> */}
      </Routes>
<ToastContainer
        position="top-center"
        autoClose={4000}
        pauseOnHover
        draggable
        theme="colored"
      />
 <ToastContainer position="top-center" autoClose={3000} />
 
      {/*  Footer pareil */}
      {!hideLayout && <Footer />}
    </CartProvider>
  
  );
}

;

export default App;
