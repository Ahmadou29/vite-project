import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail.jsx'; 
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail />} />
    </Routes>
  );
}

export default App;
