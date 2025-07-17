import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ➡️ Import du router
// import "./home.css";
// import './index.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // nécessaire pour le menu responsive



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ➡️ Ajout du router autour de App */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
