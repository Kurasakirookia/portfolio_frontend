
import './App.css';
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import GraphicDetails from './pages/GraphicDetails';
import LandingSection from './pages/LandingSection';
import ZoomScrollPage from './pages/ZoomScrollPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
   <Router>
    <Navbar></Navbar>
      
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/GraphicDetails" element={<GraphicDetails/>}/>
      {/* <Route path='/LandingSection' element={<LandingSection/>}/> */}
      <Route path='ZoomScrollPage' element={<ZoomScrollPage/>}/>
      </Routes>
    <Footer></Footer>
   </Router>
  );
}

export default App;
