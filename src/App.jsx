import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/home.css'; 

import Accueil from './components/Accueil';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
     
    </Routes>
  );
}

export default App;
