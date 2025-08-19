
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import GraphicDetails from './pages/GraphicDetails';
import LandingSection from './pages/LandingSection';
import ZoomScrollPage from './pages/ZoomScrollPage';
// import Layout from './components/Layout';
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Scroll from "./components/ScrollText"
import ScrollTextComponent from './components/ScrollTextComponent';
import ContactMe from './components/ContactMe';
// import SkillsSection from './components/SkillsSection';
// import ExperienceSection from './components/ExperienceSection';
import AdminDashboard from './admin/AdminDashboard';
import AddExperience from './admin/AddExperience';
import AddSkill from './admin/AddSkill';
import AddGraphic from './admin/AddGraphics';
import AddProject from './admin/AddProjects';
import ManageSkills from './admin/ManageSkills';
import UpdateSkill from './admin/UpdateSkill';
import UpdateExperience from './admin/UpdateExpereince';
import ManageExperience from './admin/ManageExperience';
import UpdateGraphic from './admin/UpdateGraphics';
import ManageGraphics from './admin/ManageGraphics';
import UpdateProject from './admin/UpdateProjects';
import ManageProjects from './admin/ManageProjects';

import AdminRoute from "./components/AdminRoute";
import AdminLogin from './admin/AdminLogin';
function App() {
  return (
    
   <Router basename="/portfolio">
    <Navbar></Navbar>
      
      <Routes >
        {/* <Route element={<Layout />}> */}
            <Route path="/portfolio" element={<HomePage/>}/>
            <Route path='/GraphicDetails' element={<GraphicDetails/>}/>
            <Route path='/LandingSection' element={<LandingSection/>}/>
            <Route path='/ZoomScrollPage' element={<ZoomScrollPage/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/scroll' element={<Scroll/>}/>
            <Route path='/scrollComponent' element={<ScrollTextComponent/>}/>
            <Route path='/contact_me' element={<ContactMe/>}/>

            
            <Route element={<AdminRoute />}>
                <Route path='/admin' element={<AdminDashboard/>}/>
                <Route path='/experiences/addExperience' element={<AddExperience/>}/>
                <Route path='/skills/addSkill' element={<AddSkill/>}/>
                <Route path='/graphics/addGraphic' element={<AddGraphic/>}/>
                <Route path='/projects/addProject' element={<AddProject/>}/>
                <Route path='/admin/skills' element={<ManageSkills/>}/>
                <Route path='/admin/updateSkills/:id' element={<UpdateSkill/>}/>
                <Route path='/admin/experiences' element={<ManageExperience/>}/>
                <Route path='/admin/updateExperience/:id' element={<UpdateExperience/>}/>
                <Route path='/admin/updateGraphics/:id' element={<UpdateGraphic/>}/>
                <Route path='/admin/graphics' element={<ManageGraphics/>}/>
                <Route path='/admin/updateProjects/:id' element={<UpdateProject/>}/>
                <Route path='/admin/projects' element={<ManageProjects/>}/>
            </Route>
            <Route path='/login' element={<AdminLogin/>}/>
            
        {/* </Route> */}
      </Routes>
    {/* <Footer></Footer> */}

    <div>
      {/* Your app content */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
   </Router>

   
  );
}

export default App;
