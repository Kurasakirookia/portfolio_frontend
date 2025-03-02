
import './App.css';
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
   <Router>
    <Navbar></Navbar>
      
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      </Routes>
   </Router>
  );
}

export default App;
