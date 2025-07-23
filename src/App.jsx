import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Accueil from './components/Accueil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} /> {/* ✅ racine = accueil */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
