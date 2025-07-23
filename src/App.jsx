import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail.jsx'; 
import Detail2 from './components/Detail2.jsx'; 
import ModePayement from './components/modepayement.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/detail2" element={<Detail2 />} /> 
      <Route path="/modepayement" element={<ModePayement />} /> 
    </Routes>
  );
}
export default App;
