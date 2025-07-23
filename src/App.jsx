import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
 import TabsShop from './components/TabsShop';

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<TabsShop />}/>
    </Routes>
     </>
   );
 }

 export default App;

// import React from "react";
// import TabsShop from "./TabsShop";

// function App() {
//   return <TabsShop />;
  
// }

// export default App;
