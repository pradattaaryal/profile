// App.js
import React from 'react';
 import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';
import Projectsocial from './components/Project';

 const App = () => {
  return (
    <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<Projectsocial />} />

         <Route path="/about" element={<About />} /> {/* Ensure lowercase 'about' */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
