import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


const App = () => {
  return (
    <>
   <Router>
    <Navbar/>
      <Routes>
        <Route path="/Hero" element={<Hero/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Order" element={<Order/>}  />
      </Routes>
    </Router>
    </>
  )
}

export default App