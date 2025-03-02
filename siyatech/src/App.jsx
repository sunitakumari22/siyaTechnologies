import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/home'
import Signup from './components/signup';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/contact';
import Gallary from './components/Gallary';

function App() {
  return (
    <Router>
      {/* <Navbar title="SiyaTech" /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />  {/* Default home page */}
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallary" element={<Gallary />} />
      </Routes>
    </Router>
  );
}

export default App;

