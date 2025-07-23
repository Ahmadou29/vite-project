
// import { BrowserRouter } from "react-router-dom";


// import "./index.css";
// // import Blog from "./components/Blog";
// import Categorie from "./components/Categorie";

// const App = () => { 
//   return (
// //  <BrowserRouter>
//     <Categorie />
//   // </BrowserRouter>
//   )
 
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import Categorie from "./components/Categorie";

function App() {
  return (
   <Categorie />
    
  );
}

export default App;