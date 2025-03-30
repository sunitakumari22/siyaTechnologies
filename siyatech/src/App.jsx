import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home'
import Signup from './components/Signup';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallary from './components/Gallary';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      {/* <Navbar title="SiyaTech" /> */}
      <Routes>
        <Route path="/" element={<><Navbar></Navbar><Dashboard /></>} />
        {/* <Route index element={<Home />} />  Default home page */}
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<><Signup></Signup></>} />
        <Route path="/login" element={<><Login></Login></>} />
        <Route path="/about" element={<><Navbar></Navbar><About></About></>} />
        <Route path="/service" element={<><Navbar></Navbar><Services></Services></>} />
        <Route path="/contact" element={<><Navbar></Navbar><Contact ></Contact></>} />
        <Route path="/gallery" element={<><Navbar></Navbar><Gallary></Gallary></>} />
      </Routes>
    </Router>
  );
}

export default App;

