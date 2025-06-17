
import './App.css';
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import GraphicDetails from './pages/GraphicDetails';
import LandingSection from './pages/LandingSection';
import ZoomScrollPage from './pages/ZoomScrollPage';
// import Layout from './components/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Scroll from "./components/ScrollText"


function App() {
  return (
    
   <Router basename="/portfolio">
    <Navbar></Navbar>
      
      <Routes >
        {/* <Route element={<Layout />}> */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/GraphicDetails" element={<GraphicDetails/>}/>
            <Route path='/LandingSection' element={<LandingSection/>}/>
            <Route path='ZoomScrollPage' element={<ZoomScrollPage/>}/>
            <Route path='Projects' element={<Projects/>}/>
            <Route path='scroll' element={<Scroll/>}/>

        {/* </Route> */}
      </Routes>
    {/* <Footer></Footer> */}
   </Router>
  );
}

export default App;
