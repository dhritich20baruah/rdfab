import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Service'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import Grill from './components/catalogue/Grill';
import Gate from './components/catalogue/Gate';
import Truss from './components/catalogue/Truss';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Catalogue" element={<Catalogue/>}>
              <Route path="Grill" element={<Grill/>}/>
              <Route path="Gate" element={<Gate/>}/>
              <Route path="Truss" element={<Truss/>}/>
          </Route>
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>,
    </>
  )
}

export default App;
