// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // ➡️ Import du router
// import './index.css';
// import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter> {/* ➡️ Ajout du router autour de App */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
<<<<<<< HEAD
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ➡️ Ajout du router autour de App */}
=======
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
>>>>>>> 0280aa3ff2b75fc08b85df4a7a0b79490eaa5f07
      <App />
    </BrowserRouter>
  </React.StrictMode>
)