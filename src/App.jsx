<<<<<<< HEAD

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
=======
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
 import TabsShop from './components/TabsShop';
>>>>>>> fc515c5873e3e8428c169f330883442349d4d451

function App() {
  return (
<<<<<<< HEAD
   <Categorie />
    
  );
}
=======
    <>
    <Routes>
        <Route path='/' element={<TabsShop />}/>
    </Routes>
     </>
   );
 }
>>>>>>> fc515c5873e3e8428c169f330883442349d4d451

 export default App;

// import React from "react";
// import TabsShop from "./TabsShop";

// function App() {
//   return <TabsShop />;
  
// }

// export default App;
