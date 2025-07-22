import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/home.css'; 
import Accueil from './components/Accueil';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"; 
function App() {
  return (
    <Routes>
      <Route path="/accueil" element={<Accueil />} />
    
       <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
