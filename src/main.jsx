// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    
    <div className="containe"> 
      <App />
    </div>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
