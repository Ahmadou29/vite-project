import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionOctobre from "./components/CollectionOctobre";
import Contact from "./components/Contact";
import Dress from "./components/Dress";
import OurStory from "./components/OurStory";
import Search from "./components/Search";



// import './CollectionOctobre.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollectionOctobre />} />
        <Route path="/collectionoctobre" element={<CollectionOctobre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dress" element={<Dress/>} />
        <Route path="/ourstory" element={<OurStory/>} />
        <Route path="/search" element={<Search/>} />


      </Routes>
    </Router>
  );
}

export default App;
