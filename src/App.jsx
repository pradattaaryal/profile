// App.js
import React from 'react';
 import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';
 
 const App = () => {
  return (
    <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Ensure lowercase 'about' */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
