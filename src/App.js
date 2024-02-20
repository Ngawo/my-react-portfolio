import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Home/NavBar';
import Home from './Pages/Home/Homescreen';
import AboutMe from './Pages/Home/AboutMe';
import Projects from './Pages/Home/Projects';
import ContactMe from './Pages/Home/ContactMe'


 
function App() {
  return (
    <div className="App">
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
    </div>
  );
}

export default App;